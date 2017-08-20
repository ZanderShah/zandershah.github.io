'use strict';

const app = require('./app');

app.listen(9000, 'localhost', () => {
  console.log('Server Connected');
});