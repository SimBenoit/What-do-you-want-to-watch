import flightData from './aviation_stack_response.json';

let cachedAirports = null;

export async function getFlightData(tailNumber) {
  try {


    //console.log("Data from inside getFlightData:", flightData);

    const airports = await loadAirports();

    if (!flightData || !Array.isArray(flightData.data)) {
      console.warn('No flight data available.');
      return { flights: [], uniqueAirports: [] };
    }

    const flights = flightData.data
      .filter(flight =>
        flight.departure?.icao &&
        flight.arrival?.icao &&
        flight.departure?.scheduled &&
        flight.arrival?.scheduled
      )
      .map(flight => {
        const departureTime = new Date(flight.departure.scheduled);
        const arrivalTime = new Date(flight.arrival.scheduled);
        const durationMinutes = Math.round((arrivalTime - departureTime) / (1000 * 60));

        return {
          flightDate: flight.flight_date,
          tailNumber: flight.aircraft?.registration || flight.flight?.iata || 'UNKNOWN',
          departure: enrichAirport(flight.departure?.icao, airports),
          arrival: enrichAirport(flight.arrival?.icao, airports),
          duration: durationMinutes
        };
      });

    const seen = new Set();
    const uniqueAirports = [];

    flights.forEach(f => {
      const { departure, arrival } = f;
      if (departure?.iata && !seen.has(departure.iata)) {
        uniqueAirports.push(departure);
        seen.add(departure.iata);
      }
      if (arrival?.iata && !seen.has(arrival.iata)) {
        uniqueAirports.push(arrival);
        seen.add(arrival.iata);
      }
    });

    return { flights, uniqueAirports };

  } catch (err) {
    console.error(`Error fetching flight data for ${tailNumber}:`, err);
    return { flights: [], uniqueAirports: [] };
  }
}

async function loadAirports() {
  if (cachedAirports) {
    return cachedAirports;
  }

  const res = await fetch('https://frontent-airport-json-bucket.s3.us-east-1.amazonaws.com/airports_filtered.json');
  const data = await res.json();
  cachedAirports = data;
  return data;
}

function enrichAirport(icao, airportsDB) {
  //console.log("airport database: ", airportsDB);
  //console.log("Enriching the airport for", icao);
  const match = airportsDB[icao];
  if (!match) return { icao }; // fallback if not found

  return {
    iata: match.iata,
    name: match.name,
    lat: match.lat,
    lon: match.lon,
    country: match.country
  };
}
