import { useEffect } from 'react';
import { greatCircle } from '@turf/turf';

const AircraftRoute = ({ from, to, map, color = "#222" , isMapDestroyed}) => {
  useEffect(() => {
    if (!map || !from || !to) return;

    const id = `route-${from.iata || from.icao}-${to.iata || to.icao}`;
    if (map.getSource(id)) return;

    // Use turf to generate a curved line (great-circle arc)
    const arc = greatCircle(
      [from.lon, from.lat],
      [to.lon, to.lat],
      { npoints: 100 }
    );

    map.addSource(id, {
      type: 'geojson',
      data: arc
    });

    map.addLayer({
      id,
      type: 'line',
      source: id,
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-color': color,
        'line-width': 2.5,
        'line-opacity': 0.8
      }
    });


    return () => {
      try {
        if (!map || isMapDestroyed.current || typeof map.getLayer !== 'function') return;

        if (map.getLayer(id)) {
          map.removeLayer(id);
        }
        if (map.getSource(id)) {
          map.removeSource(id);
        }
      } catch (err) {
        console.warn(`Cleanup failed for ${id}:`, err);
      }
    };

  }, [map, from, to, color]);

  return null;
};

export default AircraftRoute;
