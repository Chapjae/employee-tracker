CREATE DATABASE departments_db;
CREATE DATABASE roles_db;
CREATE DATABASE employees_db;

USE departments_db;
USE employees_db;
USE roles_db;

CREATE TABLE departments (
    id INT PRIMARY KEY,
    name, VARCHAR(30) NOT NULL
);

CREATE TABLE employees (
    id INT NOT NULL,
    first_name, VARCHAR(30) NOT NULL
    last_name, VARCHAR(30) NOT NULL
    -- some of these values might be best done with JOIN TABLE
    job_title, VARCHAR(30) NOT NULL
    department_id, INT
    salaries, DECIMAL
    managers, VARCHAR(30) NOT NULL
)

CREATE TABLE roles (
    id, INT PRIMARY KEY
    job_title, VARCHAR(30) NOT NULL
    role_id, INT NOT NULL
    department_role, VARCHAR
)
