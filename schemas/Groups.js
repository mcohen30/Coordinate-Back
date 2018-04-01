const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');
const SALT_FACTOR = 10;
var   Users = require('./Users.js')
var   Markers = require('./Markers.js')

var GroupsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  createdOn: {
    type: Date,
    required: false,
    default: Date.now
  },
  url_hash: {
    type: String,
    required: false
  },
  // users:   { type: [Users] },
  markers: { type: [Markers] }
});

module.exports = GroupsSchema;
