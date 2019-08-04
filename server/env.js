const { cleanEnv, num } = require('envalid');

module.exports = cleanEnv(process.env, {
  PORT: num({ default: 5000 }),
});
