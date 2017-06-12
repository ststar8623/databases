CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  'objectId' varchar(15),
  'message' varchar(255),
  'username' varchar(20),
  'roomname' varchar(10),
  'createdAt' varchar(20)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

