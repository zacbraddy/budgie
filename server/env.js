const { cleanEnv, num } = require('envalid');

module.exports = cleanEnv(process.env, {
  SERVER_PORT: num({ default: 5000 }),
});
