-- DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

-- DROP TABLE IF EXISTS messages;

CREATE TABLE `messages` (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT,
  text VARCHAR(200) NOT NULL,
  userid INT NOT NULL,
  roomname VARCHAR(20),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS users;

CREATE TABLE `users` (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,
  PRIMARY KEY (id)
);

-- ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (id);

-- insert into users (username) values ('steven');
-- insert into users (username) values ('peter');
-- insert into users (username) values ('kenly');
-- insert into messages (text, user_id, roomname) values ('hi peter', 1, 'hr78');
-- insert into messages (text, user_id, roomname) values ('hi kenly', 2, 'hr78');
-- insert into messages (text, user_id, roomname) values ('hi steven', 3, 'hr77');
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

