INSERT INTO departments (name)
VALUES ('Sales'),
       ('Marketing'),
       ('Finance'),
       ('Human Resources'),
       ('Operations');

INSERT INTO roles (job_title, salaries, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 5),
       ('Software Engineer', 120000, 5),
       ('Account Manager', 125000, 1),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 4),
       ('Lawyer', 190000, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)    
VALUES (1, 'John', 'Doe', 1, NULL),
    (2, 'Jane', 'Smith', 2, 1),
    (3, 'Michael', 'Johnson', 2, 1),
    (4, 'Emily', 'Williams', 3, 2),
    (5, 'David', 'Brown', 3, 2),
    (6, 'Sarah', 'Miller', 1, NULL),
    (7, 'Daniel', 'Jones', 2, 6),
    (8, 'Olivia', 'Davis', 3, 6),
    (9, 'William', 'Garcia', 1, NULL),
    (10, 'Sophia', 'Martinez', 2, 9);  