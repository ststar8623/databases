var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (query, callback) {
      db.selectMessage(query, callback);
    }, 
    // a function which can be used to insert a message into the database
    post: function (data) {
      // db.insertMessage(data);
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data) {
      // db.insertUser(data.username);
    }
  }
};

