const stripeLibrary = require('stripe');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/require-login');

const stripe = stripeLibrary(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    await stripe.charges.create({
      amount: 499,
      currency: 'gbp',
      description: 'One month subscription, £4.99',
      source: req.body.id,
    });

    req.user.credits += 1;
    const user = await req.user.save();
    res.send(user);
  });
};
