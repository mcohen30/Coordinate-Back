const mongoose = require('mongoose');
let db = null;

module.exports = {
  connect: async () => {
    db = db || (await mongoose.connect(process.env.MONGO_CONNECTION_STRING));
    return db;
  }
}
