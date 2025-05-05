import React, { useRef, useMemo  } from 'react';
import useMapbox from '../hooks/useMapbox.jsx';
import useFlightData from '../hooks/useFlightData.jsx';
import AirportMarker from './subcomponent/AirportMarker.jsx';
import AircraftRoute from './subcomponent/AircraftRoute.jsx';
import AircraftLocation from './subcomponent/AircraftLocation.jsx';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Text.css';
import './Jetwatch.css';

const Jetwatch = () => {
  const mapContainer = useRef(null);
  const { airports, routes } = useFlightData('N628TS');
  //console.log("checking airports list : ", airports)
  const mapOptions = useMemo(() => {
    //console.log("checking airports list : ", airports)
    if (airports.length === 0) return null;
    return {
      center: [airports[0].lon, airports[0].lat],
      zoom: 5,
      style: 'mapbox://styles/mapbox/navigation-night-v1'
    };
  }, [airports]);

  const { mapRef, map, mapReady, isMapDestroyed } = useMapbox(mapContainer, mapOptions);

  return (
    <div>
      <h1 className="title">Jetwatch</h1>
      <div ref={mapContainer} className='map-container' />

      {mapReady && map && airports.map((airport, index) => (
        <AirportMarker
          key={airport.iata || airport.icao || `${airport.lat}-${airport.lon}`}
          airport={airport}
          map={map}
          index={index}
        />
      ))}

      {mapReady && map && routes.length > 1 && (
        <>
          {routes.map(([from, to], index) => (
            <AircraftRoute
              key={`${from.iata}-${to.iata}-${index}`}
              from={from}
              to={to}
              map={mapRef.current}
              isMapDestroyed={isMapDestroyed}
            />
          ))}
        </>
      )}


        {mapReady && mapRef.current && routes.length > 0 && (
          <AircraftLocation
            map={mapRef.current}
            location={{
              ...routes[routes.length - 1][1],
              lat: routes[routes.length - 1][1].lat + 0.05,
              flightDate: routes[routes.length - 1][2]
            }}
          />
        )}

    </div>
  );
};

export default Jetwatch;
