const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  googleId: String,
});

model('users', userSchema);
