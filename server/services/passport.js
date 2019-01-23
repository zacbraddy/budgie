const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const { googleClientId, googleClientSecret } = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
    }
  )
);
