
"use client";

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { RouteTracker } from './route-tracker';
import { Button } from '@/components/ui/button';
import { RefreshCw, Navigation, AlertTriangle, Loader2 } from 'lucide-react';

interface Location {
  lat: number;
  lng: number;
}

interface InteractiveTrackingMapProps {
  center: Location;
  pickupLocation?: Location;
  deliveryLocation?: Location;
  driverLocation?: Location;
  orderId?: string;
}

function MapController({ center, zoom }: { center: Location, zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([center.lat, center.lng], zoom);
  }, [center, zoom, map]);
  return null;
}

export default function InteractiveTrackingMapLeaflet({
  center,
  pickupLocation,
  deliveryLocation,
  driverLocation,
}: InteractiveTrackingMapProps) {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [mapCenter, setMapCenter] = useState(center);
  const [zoom, setZoom] = useState(13);

  const routePoints = [
    ...(pickupLocation ? [{
      location: pickupLocation,
      title: 'Punto de Recogida',
      type: 'pickup' as const,
      completed: !!driverLocation
    }] : []),
    ...(deliveryLocation ? [{
      location: deliveryLocation,
      title: 'Punto de Entrega',
      type: 'delivery' as const,
      completed: false
    }] : [])
  ];

  const handleRefresh = () => {
    setLastUpdate(new Date());
    if (driverLocation) {
        setMapCenter(driverLocation);
    }
  };

  const handleCenterOnDriver = () => {
    if (driverLocation) {
      setMapCenter(driverLocation);
      setZoom(15);
    } else if (pickupLocation) {
      setMapCenter(pickupLocation);
      setZoom(15);
    }
  };

  useEffect(() => {
    if (driverLocation) {
        setMapCenter(driverLocation);
    } else if (pickupLocation) {
        setMapCenter(pickupLocation);
    }
  }, [driverLocation, pickupLocation]);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full flex flex-col">
      <div className="p-3 border-b bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${driverLocation ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
            <span className="text-sm font-medium">
              {driverLocation ? 'Conductor en Ruta' : 'Esperando Ubicación'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500 hidden sm:inline">
              Actualizado: {lastUpdate.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
            </span>
            <Button
              onClick={handleRefresh}
              size="icon"
              variant="outline"
              className="h-8 w-8"
              title="Actualizar ubicación del mapa"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button
              onClick={handleCenterOnDriver}
              size="icon"
              variant="outline"
              className="h-8 w-8"
              title="Centrar en conductor"
              disabled={!driverLocation && !pickupLocation}
            >
              <Navigation className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative flex-grow min-h-[300px] z-0">
        <MapContainer
            center={[mapCenter.lat, mapCenter.lng]}
            zoom={zoom}
            style={{ width: '100%', height: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapController center={mapCenter} zoom={zoom} />
            <RouteTracker
                routePoints={routePoints}
                driverLocation={driverLocation}
            />
        </MapContainer>
      </div>
    </div>
  );
}
