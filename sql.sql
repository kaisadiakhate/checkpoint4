CREATE DATABASE kitchen;
CREATE TABLE tableware (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    qty int
)

CREATE TABLE office (
id SERIAL PRIMARY KEY,
name varchar(255)
location varchar(255)
starting_year int
)