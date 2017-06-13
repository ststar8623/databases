DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE `messages` (
  /* Describe your table here.*/
  objectId INTEGER AUTO_INCREMENT,
  message VARCHAR(255),
  user_id INTEGER,
  room_id INTEGER,
  PRIMARY KEY (objectId)
);

/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS users;

CREATE TABLE `users` (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(25),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS rooms;

CREATE TABLE `rooms` (
  id INTEGER AUTO_INCREMENT,
  roomname VARCHAR(25),
  PRIMARY KEY (id)
);

ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (id);
ALTER TABLE `messages` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (id);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

