require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getFlightData } = require('../frontend/src/utils/getFlightData.js');

const port = 5000;
const allowedOrigins = [
  'https://arminsden.ca',
  'http://localhost:3000',
  'http://127.0.0.1',
  'http://frontend.arminsden.local'
];

const app = express();
app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

//test route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'JetWatch backend is live!' });
});


app.get('/api/flights/:tailNumber', async (req, res) => {
  const tailNumber = req.params.tailNumber;

  const { flights, uniqueAirports } = await getFlightData(tailNumber);
  //console.log('flights data: ', flights);
  //console.log('unique airports data: ', uniqueAirports)
  res.json({ tailNumber, flights, uniqueAirports });
});




//health check during CI/CD
app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {

  console.log(`Jetwatch is running on http://localhost:${port}`);
});
