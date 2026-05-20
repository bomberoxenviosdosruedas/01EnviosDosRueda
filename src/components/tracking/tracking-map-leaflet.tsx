
"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { createLucideIcon } from '@/lib/leaflet-icons';

interface Location {
  lat: number;
  lng: number;
}

interface TrackingMapProps {
  location: Location;
}

export default function TrackingMapLeaflet({ location }: TrackingMapProps) {
  const openInExternalMap = () => {
    const googleMapsUrl = `https://maps.google.com/maps?ll=${location.lat},${location.lng}&z=13&t=m`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative">
        <div className="w-full h-96 relative z-0">
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.lat, location.lng]} icon={createLucideIcon('#ef4444')} />
          </MapContainer>
        </div>

        <div className="p-4 bg-gray-50 border-t">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>&copy; OpenStreetMap contributors</span>
            <div className="space-x-4">
              <button
                onClick={openInExternalMap}
                className="text-blue-600 hover:underline"
              >
                Abrir en Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
