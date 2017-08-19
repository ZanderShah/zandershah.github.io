const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const client = require('./database');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.get('/summoners-war/get', (req, res) => {
  res.send('[Get] Hello There');
});

app.post('/summoners-war/get', (req, res) => {
  res.send('[Post] Hello There');
});

module.exports = app;