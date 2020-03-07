const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const https = require("https");
const _ = require('lodash')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/getCities', (req, res) => {
  const city = req.query.city;
  res.setHeader('Content-Type', 'application/json');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f630966bce3259a2cdffd1c016b9121e`

  https.get(url, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      const { cod, message } = JSON.parse(data)
      res.status(cod)
      res.send(JSON.stringify(JSON.parse(data, 'data')));

    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);