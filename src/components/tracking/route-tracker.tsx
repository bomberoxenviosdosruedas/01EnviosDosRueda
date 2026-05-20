
"use client";

import React, { useEffect, useState } from 'react';
import { Marker, Polyline, useMap } from 'react-leaflet';
import { createLucideIcon } from '@/lib/leaflet-icons';
import L from 'leaflet';

interface Location {
  lat: number;
  lng: number;
}

interface RoutePoint {
  location: Location;
  title: string;
  type: 'pickup' | 'delivery' | 'driver';
  completed?: boolean;
}

interface RouteTrackerProps {
  routePoints: RoutePoint[];
  driverLocation?: Location;
}

export function RouteTracker({ routePoints, driverLocation }: RouteTrackerProps) {
  const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);
  const map = useMap();

  useEffect(() => {
    const fetchRoute = async () => {
      const pickupPoint = routePoints.find(p => p.type === 'pickup');
      const deliveryPoint = routePoints.find(p => p.type === 'delivery');

      if (pickupPoint && deliveryPoint) {
        const origin = driverLocation || pickupPoint.location;
        const destination = deliveryPoint.location;

        try {
          const url = `https://router.project-osrm.org/route/v1/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`;
          const response = await fetch(url);
          const data = await response.json();

          if (data.code === 'Ok' && data.routes.length > 0) {
            const coords = data.routes[0].geometry.coordinates.map((c: [number, number]) => [c[1], c[0]] as [number, number]);
            setRouteCoords(coords);

            // Optionally fit bounds if it's the first load or major change
            // map.fitBounds(L.latLngBounds(coords), { padding: [50, 50] });
          }
        } catch (error) {
          console.error("Error fetching tracking route:", error);
        }
      }
    };

    fetchRoute();
  }, [routePoints, driverLocation, map]);

  return (
    <>
      {routePoints.map((point, idx) => (
        <Marker
          key={`${point.type}-${idx}`}
          position={[point.location.lat, point.location.lng]}
          icon={createLucideIcon(point.type === 'pickup' ? '#f59e0b' : '#ef4444')}
        >
          {/* L.Popup can be added here if needed */}
        </Marker>
      ))}

      {driverLocation && (
        <Marker
          position={[driverLocation.lat, driverLocation.lng]}
          icon={createLucideIcon('#3b82f6')}
        />
      )}

      {routeCoords.length > 0 && (
        <Polyline positions={routeCoords} color="#3b82f6" weight={4} opacity={0.7} />
      )}
    </>
  );
}
