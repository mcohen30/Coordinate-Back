const db   = require('../db.js');
var Groups = require('../models/Groups.js')

/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {string} unique id of web
*/
module.exports = async (name = '', context) => {
  let result = await db.connect();
  var newGroup = new Groups({name: context.params.name})
  newGroup.save((err)=> { if (err) return console.error(err) });
  // console.log(newGroup.);
  return `Hey ${context.params.name}, did you call for a backend?`;
  //return
};
