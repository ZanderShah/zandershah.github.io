const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const client = require('./database');
const { mapboxAccessToken, t_maps, whitelist, secret } = require('./config');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/api/food-map', (req, result) => {
  result.json({
    meals: t_maps,
    token: mapboxAccessToken
  });
});

app.get('/api/summoners-war', (req, result) => {
  client.query('select * from sw where date in (select max(date) from sw group by dungeon)', (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      ret = []
      for (const row of res.rows) {
        if (whitelist.includes(row.dungeon)) {
          ret.push(row)
        }
      }
      result.send(ret);
    }
  });
});

app.get('*', (req, result) => {
  result.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/api/*', (req, result, next) => {
  if (req.headers['X-Access-Token'] === secret) {
    next();
  } 
});

app.post('/api/summoners-war', (req, result) => {
  const body = req.body
  const query = {
    text: 'insert into sw(date, dungeon, time, team1, team2, team3, team4, team5) values ($1, $2, $3, $4, $5, $6, $7, $8)',
    values: body.data
  }
  client.query(query, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      result.status(200).json(query);
    }
  });
});

module.exports = app;