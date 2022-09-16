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

ALTER TABLE tableware add office_key varchar(255);

alter table tableware 
add constraint FK_office_id
foreign key (office_id) references office(id);

SELECT * FROM  tableware INNER JOIN office ON tableware.office_id=office.id