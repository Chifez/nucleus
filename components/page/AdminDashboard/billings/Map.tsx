'use client';

import { useEffect, useRef, useMemo } from 'react';
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader';

function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY as string,
        version: 'weekly',
      });
      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker');

      const position = {
        lat: 43.642693,
        lng: -79.3871189,
      };

      const mapOptions = {
        center: position,
        zoom: 5,
        mapId: 'MY_NEXTJS_MAPID',
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    init();
  }, []);
  return <div style={{ height: '400px' }} ref={mapRef} />;
}
export default Map;
