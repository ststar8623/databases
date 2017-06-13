DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE `messages` (
  /* Describe your table here.*/
  objectId INTEGER AUTO_INCREMENT,
  message VARCHAR(255),
  user_id INTEGER,
  room VARCHAR(25),
  PRIMARY KEY (objectId)
);

/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS users;

CREATE TABLE `users` (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(25),
  PRIMARY KEY (id)
);

ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (id);

insert into users (name) values ('steven');
insert into users (name) values ('peter');
insert into users (name) values ('kenly');
insert into messages (message, user_id, room) values ('hi peter', 1, 'hr78');
insert into messages (message, user_id, room) values ('hi kenly', 2, 'hr78');
insert into messages (message, user_id, room) values ('hi steven', 3, 'hr77');
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

