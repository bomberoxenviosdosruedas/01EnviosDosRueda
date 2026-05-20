
'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map as MapIcon, Loader2 } from 'lucide-react';
import { createLucideIcon } from '@/lib/leaflet-icons';
import L from 'leaflet';

// Fix for default marker icons if not using custom ones
if (typeof window !== 'undefined') {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
}

interface LatLngLiteral {
  lat: number;
  lng: number;
}

interface RouteMapProps {
  origin?: LatLngLiteral;
  destination?: LatLngLiteral;
}

const MDP_CENTER: [number, number] = [-37.9951, -57.6432];

function MapResizer({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
    if (center) {
      map.setView(center, map.getZoom());
    }
  }, [map, center]);
  return null;
}

function RouteHandler({ origin, destination, onRouteFound }: {
    origin?: LatLngLiteral,
    destination?: LatLngLiteral,
    onRouteFound: (coords: [number, number][]) => void
}) {
  const map = useMap();

  useEffect(() => {
    if (origin && destination) {
      const fetchRoute = async () => {
        try {
          const url = `https://router.project-osrm.org/route/v1/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`;
          const response = await fetch(url);
          const data = await response.json();

          if (data.code === 'Ok' && data.routes.length > 0) {
            const coordinates = data.routes[0].geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]] as [number, number]);
            onRouteFound(coordinates);

            const bounds = L.latLngBounds(coordinates);
            map.fitBounds(bounds, { padding: [40, 40] });
          }
        } catch (error) {
          console.error("Error fetching OSRM route:", error);
        }
      };

      fetchRoute();
    }
  }, [origin, destination, map, onRouteFound]);

  return null;
}

export default function RouteMapLeaflet({ origin, destination }: RouteMapProps) {
  const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);

  const openInExternalMap = () => {
    if (!origin || !destination) return;
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}`;
    window.open(url, '_blank');
  };

  const originPos = origin ? [origin.lat, origin.lng] as [number, number] : null;
  const destinationPos = destination ? [destination.lat, destination.lng] as [number, number] : null;
  const centerPos = originPos || MDP_CENTER;

  return (
    <div className="mt-6">
      <div className="rounded-lg overflow-hidden shadow-md border h-[320px] relative z-0">
        <MapContainer
          center={centerPos}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <MapResizer center={centerPos} />

          {originPos && (
            <Marker position={originPos} icon={createLucideIcon("#3b82f6")} />
          )}

          {destinationPos && (
            <Marker position={destinationPos} icon={createLucideIcon("#ef4444")} />
          )}

          {origin && destination && (
            <RouteHandler
                origin={origin}
                destination={destination}
                onRouteFound={setRouteCoords}
            />
          )}

          {routeCoords.length > 0 && (
            <Polyline positions={routeCoords} color="#eab308" weight={4} opacity={0.8} />
          )}
        </MapContainer>
      </div>
       <div className="text-center mt-2">
            <Button onClick={openInExternalMap} variant="ghost" size="sm" disabled={!origin || !destination}>
                <MapIcon className="mr-2 h-4 w-4" />
                Abrir en Google Maps
            </Button>
       </div>
    </div>
  );
}
