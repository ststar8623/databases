var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');

var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      // db.Message.findAll( { include: [User] } )
      //   .complete(function(err, results) {
      //     if (err) {
      //       console.error(err);
      //     } else {
      //       res.json(results);
      //     }
      //   });
      models.messages.get(function(err, results) {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      // db.Message.findOrCreate( {username: req.body[username]} )
      //   .complete(function(err, user) {
      //     var params = {
      //       text: req.body[text], 
      //       'user_id': user.id, 
      //       roomname: req.body[roomname] 
      //     };
      //     Message.create(params)
      //       .complete(function(err, results) {
      //         res.sendStatus(201);
      //     });
      // });
      var params = [ req.body[text], req.body[userid], req.body[roomname] ];
      models.messages.post(params, function(err, results) {
        if (err) {
          console.error(err);
        } else {
          res.json(results);
        }
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // db.User.findAll()
      //   .complete(function(err, results) {
      //     res.json(results);
      //   });
      models.users.get(function(err, results) {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      // db.User.create( {username: req.body[username]} )
      //   .complete(function(err, user) {
      //     res.sendStatus(201);
      //   });
      var params = [ req.body[username] ];
      models.users.post(params, function(err, results) {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    }
  }
};

