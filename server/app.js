const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/summoners-war/run', (req, res) => {
  var ret = {
    message: 'Hello There',
  }
  res.status(200).json(ret);
});

module.exports = app;