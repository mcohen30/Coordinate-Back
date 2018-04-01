const mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  location: {
    type: [Number],
    required: false
  }
});

module.exports = UsersSchema;
