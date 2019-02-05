const passport = require('passport');
const mongoose = require('mongoose');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const { googleClientId, googleClientSecret } = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ googleId: profile.id });

      if (!user) user = await new User({ googleId: profile.id }).save();

      done(null, user);
    }
  )
);
