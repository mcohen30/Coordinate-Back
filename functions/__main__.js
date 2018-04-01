const db   = require('../db.js');
const mongoose = require('mongoose');
var Groups = mongoose.model('Groups', require('../schemas/Groups.js'));

/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {any}
*/

module.exports = async (name = '', context) => {
  var groupID = 0;
  let result = await db.connect();
  // console.log(result)
  let newGroup = new Groups({ name: name });
  await newGroup.save();
  let results = await Groups.findOne();

  return results._id;
};
