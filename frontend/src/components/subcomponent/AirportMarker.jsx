import { useEffect } from 'react';
import './AirportMarker.css';
import mapboxgl from 'mapbox-gl';

const AirportMarker = ({ airport, map, index }) => {
  useEffect(() => {

    const el = document.createElement('div');
    el.className = 'custom-marker';
    el.innerText = index + 1;

    const marker = new mapboxgl.Marker(el)
      .setLngLat([airport.lon, airport.lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="airport-popup">
            <h4>${airport.name} (${airport.iata})</h4>
            <img src="https://flagcdn.com/${airport.country.toLowerCase()}.svg" alt="${airport.country}" />
          </div>
        `)
      )
      .addTo(map);

    return () => marker.remove();
  }, [airport, map, index]);

  return null;
};

export default AirportMarker;
