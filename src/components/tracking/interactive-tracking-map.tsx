
"use client";

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const InteractiveTrackingMapLeaflet = dynamic(() => import('./interactive-tracking-map-leaflet'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full flex items-center justify-center">
        <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
            <p className="text-sm text-gray-600">Cargando mapa...</p>
        </div>
    </div>
  ),
});

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

export function InteractiveTrackingMap(props: InteractiveTrackingMapProps) {
  return <InteractiveTrackingMapLeaflet {...props} />;
}
