const db = require('../db.js');

/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {any}
*/
module.exports = async (name = 'world', context) => {
  let dbConnection = await db.connect();
  console.log(dbConnection)
  return 'hello';
};
