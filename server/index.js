const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const { SERVER_PORT } = require('./env');
const { mongoUri, cookieKey } = require('./config/keys');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/auth-routes');

mongoose.connect(mongoUri, { useNewUrlParser: true });
const app = express();
app.use(cookieSession({ maxAge: 24 * 60 * 60 * 1000, keys: [cookieKey] }));
app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);

app.listen(SERVER_PORT);
console.log('Listening of port: ', SERVER_PORT);
