var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

connection.selectMessage = function(query, callback) {
  let queryString = 'select * from messages';
  connection.query(queryString, (err, rows, field) => {
    if (err) throw err;
    console.log('Query result: ', rows);
    callback(rows);
  });
};

connection.insertMessage = function(query) {
  let queryString = 'insert into messages (message, user_id, room) values (${data.message}, ${data.user_id}, ${data.room})';
  connection.query(queryString, (err, rows, field) => {
    if (err) {
      console.log('messages model post error ', err);
    } else {
      console.log('model message post ', rows);
    }
  });
};

module.exports = connection;