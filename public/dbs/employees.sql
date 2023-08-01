DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees (
    id INT NOT NULL,
    first_name, VARCHAR(30) NOT NULL
    last_name, VARCHAR(30) NOT NULL
    -- some of these values might be best done with JOIN TABLE
    job_title, VARCHAR(30) NOT NULL
    departments, VARCHAR(30) NOT NULL
    salaries, INT NOT NULL
    managers, VARCHAR(30) NOT NULL
)
