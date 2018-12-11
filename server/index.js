const express = require('express');
const { PORT } = require('./env');

const app = express();

app.get('/', (req, res) => res.send({ hi: 'there' }));

app.listen(PORT);
