
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import { MapPin } from 'lucide-react';

export const createLucideIcon = (color: string = "#ef4444") => {
  const iconHtml = ReactDOMServer.renderToString(
    <MapPin size={32} color={color} fill={color} fillOpacity={0.2} strokeWidth={2.5} />
  );

  return L.divIcon({
    html: iconHtml,
    className: 'custom-leaflet-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};
