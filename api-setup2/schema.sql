DROP DATABASE IF EXISTS delivery_co;

CREATE DATABASE delivery_co;

\c delivery_co;
CREATE TYPE authRole AS ENUM ('user', 'manager', 'admin');

CREATE TABLE employee 
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(25),
  password TEXT NOT NULL,
  first_inital TEXT NOT NULL,
  last_name TEXT NOT NULL,
  role authRole
);


CREATE TABLE delivery 
(
  id SERIAL PRIMARY KEY,
  last_name TEXT NOT NULL,
  address TEXT NOT NULL,
  order_date DATE NOT NULL,
  shipped BOOLEAN,
  shipped_date DATE,
  employee_id INTEGER
    REFERENCES  employee ON DELETE CASCADE,
  status TEXT NOT NULL
);


CREATE TABLE employee_to_delivery
(
  employee_id INTEGER
    REFERENCES employee ON DELETE CASCADE,
  delivery_id INTEGER 
    REFERENCES delivery ON DELETE CASCADE
);


CREATE TABLE delivery_review  
(
  id SERIAL PRIMARY KEY,
  delivery_id  INTEGER
    REFERENCES delivery ON DELETE CASCADE,
  employee_id INTEGER
    REFERENCES employee ON DELETE CASCADE,
  review VARCHAR(500)
  );


/* --------------SEED DATA------------------------*/
INSERT INTO employee
  (username, password, first_inital,  last_name, role)
VALUES  
  ('user', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'T', 'T', 'user');

INSERT INTO employee
  (username, password, first_inital, last_name, role)
VALUES
  ('manager', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'M', 'M', 'manager');

INSERT INTO employee
  (username, password, first_inital, last_name, role)
VALUES
  ('admin', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'R', 'R', 'admin');

INSERT INTO delivery
(last_name, address, order_date, shipped, shipped_date, status)
VALUES('test', '123 fakea street', '1999-01-08', true, '1999-01-08', 'in transit');

INSERT INTO employee_to_delivery
  (employee_id, delivery_id)
VALUES
  (1, 1);