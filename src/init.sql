CREATE DATABASE squeal_forest;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO users (name, email) VALUES ('Rapunzel', 'john@hightower.com');
INSERT INTO users (name, email) VALUES ('Snow White', 'snowwhite@cabininthewoords.com');

