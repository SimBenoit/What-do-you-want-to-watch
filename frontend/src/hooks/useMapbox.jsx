import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoibm9uYW1lcGV0ZSIsImEiOiJjbWExNm94YXQwbDJyMmpxNnh5bGZ0M2NjIn0.HK1TV62nPeC4bov7ZBq6Dw';

const useMapbox = (containerRef, options = {}) => {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const [map, setMap] = useState(null);
  const isMapDestroyed = useRef(false);

  useEffect(() => {
    //console.log("options: " ,options);
    if (!containerRef.current || !options || !options.center) return;

    if (mapRef.current) return;

    //console.log("LOADING THE MAP")

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: options.style || 'mapbox://styles/mapbox/navigation-night-v1',
      center: options.center,
      zoom: options.zoom || 2,
    });

    mapRef.current = map;
    setMap(map);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        map.resize();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    map.on('load', () => {
      setMapReady(true);
      requestAnimationFrame(() => map.resize());
    });

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (mapRef.current) {
        isMapDestroyed.current = true;
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [containerRef, options]);

  return { mapRef, map, mapReady, isMapDestroyed };
};

export default useMapbox;
