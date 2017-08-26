const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const client = require('./database');
const { mapboxAccessToken, t_maps, blacklist } = require('./config');

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
  client.query('select * from sw where date in (select max(date) from sw group by dungeon) order by date desc limit 10', (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      ret = []
      for (var row of res.rows) {
        if (!blacklist.includes(row.dungeon)) {
          ret.push(row);
        }
      }
      result.send(ret);
    }
  });
});

app.get('*', (req, result) => {
  result.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;