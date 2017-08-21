const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const client = require('./database');
const { mapboxAccessToken, t_maps } = require('./config');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/api/*', (req, res, next) => {
  console.log(req.ip);
  next();
})

app.get('/api/food-map', (req, result) => {
  result.json({
    meals: t_maps,
    token: mapboxAccessToken
  });
});

app.get('/api/summoners-war', (req, result) => {
  client.query('select name from test order by timestamp desc limit 5', (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      result.send(res.rows);
    }
  });
});

app.get('*', (req, result) => {
  result.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/api/summoners-war', (req, result) => {
  result.send('[Post] Hello There');
});

module.exports = app;