
"use client";

import dynamic from 'next/dynamic';

const TrackingMapLeaflet = dynamic(() => import('./tracking-map-leaflet'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-muted flex items-center justify-center rounded-lg border">
        <span className="text-muted-foreground">Cargando mapa...</span>
    </div>
  ),
});

interface Location {
  lat: number;
  lng: number;
}

interface TrackingMapProps {
  location: Location;
}

export function TrackingMap(props: TrackingMapProps) {
  return <TrackingMapLeaflet {...props} />;
}
