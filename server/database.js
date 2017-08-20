const { Client } = require('pg')
const { databaseConfig } = require('./config');

const client = new Client(databaseConfig);

client.connect((err) => {
  if (err) {
    console.error('Connection Error', err.stack);
  } else {
    console.log('Connected');
  }
})

module.exports = client;