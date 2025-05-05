// hooks/useFlightData.js
import { getFlightData } from '../utils/getFlightData.js';
import { useEffect, useState } from 'react';

const useFlightData = (tailNumber) => {
  const [airports, setAirports] = useState([]);
  const [routes, setRoutes] = useState([]);



  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const data = await getFlightData(tailNumber);
        //console.log("frontend data: ", data)
        if (!data || data.flights.length === 0) {
          console.warn('No flight data returned.');
          return;
        }

        const routePairs = data.flights.map(({ departure, arrival, flightDate }) => [departure, arrival, flightDate]);

        setAirports(data.uniqueAirports);
        setRoutes(routePairs);

        //console.log('Data received:', data);
        //console.log('Airports:', airports);
        //console.log('Routes:', routes);

        //console.log("Route Pairs: ", routePairs);
      } catch (err) {
        console.error('Error fetching flight data:', err);
      }
    };

    fetchFlights();
  }, [tailNumber]);

  return {airports,routes};
};

export default useFlightData;
