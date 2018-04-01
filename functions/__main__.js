/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {string}
*/
module.exports = async (name = 'my fellow end-user', context) => {
  let result = await db.connect();
  return `Hey ${name}, did you call for a backend?`;
};
