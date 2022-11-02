CREATE DATABASE todo_db;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255),
  completed BOOLEAN DEFAULT false
);