DROP DATABASE IF EXISTS departments_db;
CREATE DATABASE departments_db;

USE departments_db;

CREATE TABLE departments (
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL
);

