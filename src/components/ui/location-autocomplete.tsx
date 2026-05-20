
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Loader2, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LocationAutocompleteProps {
  onSelect: (lat: number, lng: number, address: string) => void;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
}

interface PhotonFeature {
  geometry: {
    coordinates: [number, number]; // [lng, lat]
  };
  properties: {
    name?: string;
    street?: string;
    housenumber?: string;
    postcode?: string;
    city?: string;
    country?: string;
  };
}

export function LocationAutocomplete({
  onSelect,
  placeholder = "Buscar dirección...",
  defaultValue = "",
  className,
}: LocationAutocompleteProps) {
  const [query, setQuery] = useState(defaultValue);
  const [suggestions, setSuggestions] = useState<PhotonFeature[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 3) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      try {
        // Photon API with Mar del Plata context
        const bbox = "-57.65,-38.08,-57.50,-37.90";
        const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&bbox=${bbox}&limit=5`;
        const response = await fetch(url);
        const data = await response.json();
        setSuggestions(data.features || []);
        setIsOpen(true);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleSelect = (feature: PhotonFeature) => {
    const [lng, lat] = feature.geometry.coordinates;
    const { name, street, housenumber, city } = feature.properties;

    let address = "";
    if (street) {
        address = street;
        if (housenumber) address += ` ${housenumber}`;
    } else if (name) {
        address = name;
    }

    if (city && !address.includes(city)) {
        address += `, ${city}`;
    }

    setQuery(address);
    setIsOpen(false);
    onSelect(lat, lng, address);
  };

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <div className="relative">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="pr-10"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          ) : (
            <MapPin className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      </div>

      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 bg-popover border rounded-md shadow-lg max-h-60 overflow-auto py-1">
          {suggestions.map((feature, index) => {
            const { name, street, housenumber, city } = feature.properties;
            const mainText = street ? `${street}${housenumber ? ' ' + housenumber : ''}` : (name || "Dirección desconocida");
            const subText = city || "Mar del Plata";

            return (
              <li
                key={index}
                onClick={() => handleSelect(feature)}
                className="px-4 py-2 hover:bg-accent hover:text-accent-foreground cursor-pointer flex flex-col"
              >
                <span className="text-sm font-medium">{mainText}</span>
                <span className="text-xs text-muted-foreground">{subText}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
