const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const { SERVER_PORT } = require('./env');
const { mongoUri, cookieKey } = require('./config/keys');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/auth-routes');
const billingRoutes = require('./routes/billing-routes');

mongoose.connect(mongoUri, { useNewUrlParser: true });
const app = express();
app.use(bodyParser.json());
app.use(cookieSession({ maxAge: 24 * 60 * 60 * 1000, keys: [cookieKey] }));
app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);
billingRoutes(app);

app.listen(SERVER_PORT);
console.log('Listening on port: ', SERVER_PORT);
