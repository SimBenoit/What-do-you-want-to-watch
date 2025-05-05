import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './AircraftLocation.css';

const AircraftLocation = ({ location, map }) => {
  useEffect(() => {
    if (!map || !location?.lat || !location?.lon) return;
    console.log("location: ",location);

    const el = document.createElement('div');
    el.className = 'aircraft-marker';
    el.innerHTML = `
        <img src="/PlaneIcon.png" alt="Plane icon" class="aircraft-icon" />
    `;


    const marker = new mapboxgl.Marker(el)
      .setLngLat([location.lon, location.lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="aircraft-popup">
            <strong>Tail #</strong>: ${location.tailNumber || 'N/A'}<br/>
            <strong>Current:</strong> ${location.name} (${location.iata})<br/>
            <strong>Arrived at :</strong> ${location.flightDate}
          </div>
        `)
      )
      .addTo(map);

    return () => marker.remove();
  }, [map, location]);

  return null;
};

export default AircraftLocation;
