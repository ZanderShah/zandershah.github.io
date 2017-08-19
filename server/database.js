const { Client } = require('pg')
const { c } = require('../src/utils/constants');

const client = new Client(c['databaseConfig']);

client.connect((err) => {
  if (err) {
    console.error('Connection Error', err.stack);
  } else {
    console.log('Connected');
  }
})

module.exports = client;