const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

model('users', userSchema);
