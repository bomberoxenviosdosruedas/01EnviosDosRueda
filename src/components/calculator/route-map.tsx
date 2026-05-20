
'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const RouteMapLeaflet = dynamic(() => import('./route-map-leaflet'), {
  ssr: false,
  loading: () => (
    <div className="mt-6 space-y-2 flex flex-col items-center justify-center h-[320px] bg-muted/50 rounded-lg">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-muted-foreground text-sm">Cargando mapa...</p>
    </div>
  ),
});

interface LatLngLiteral {
  lat: number;
  lng: number;
}

interface RouteMapProps {
  origin?: LatLngLiteral;
  destination?: LatLngLiteral;
}

export default function RouteMap(props: RouteMapProps) {
  return <RouteMapLeaflet {...props} />;
}
