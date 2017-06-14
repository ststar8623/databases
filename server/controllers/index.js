var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      let url = req.url.slice(1, req.url.length);
      models[url].get(req.body, function(err, data) {
        if (!data) {
          res.end();
        } else {
          console.log('Query data: ', data);
          res.end(JSON.stringify(data));
        }
      });
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      let url = req.url.slice(1, req.url.length);
      models[url].post(req.body, function(err, data) {
        if (!data) {
          res.end();
        } else {
          res.end(data);
        }
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

