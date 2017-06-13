var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('Messages Body: ', req);
      models.messages.get( (err, data) => {
        if (err) {
          console.error (err);
        } else {
          res.send(data);
          res.statusCode(200);
          res.end();
        }
      });
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {

    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

