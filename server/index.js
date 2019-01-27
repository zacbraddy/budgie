const express = require('express');
const mongoose = require('mongoose');
const { SERVER_PORT } = require('./env');
const { mongoUri } = require('./config/keys');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/auth-routes');

mongoose.connect(mongoUri, { useNewUrlParser: true });
const app = express();
authRoutes(app);

app.listen(SERVER_PORT);
console.log('Listening of port: ', SERVER_PORT);
