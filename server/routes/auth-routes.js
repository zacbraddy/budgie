const passport = require('passport');

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};
