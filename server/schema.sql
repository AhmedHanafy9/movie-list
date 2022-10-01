DROP DATABASE if exists movielist;
CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies (
  id INT(11) auto_increment,
  moviename VARCHAR(255),
  watched BOOLEAN,
  PRIMARY KEY (id)
);