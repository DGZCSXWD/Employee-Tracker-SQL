USE employee_db;

INSERT INTO department (name) VALUES 
('Sales'),
('Engineering'),
('HR');

INSERT INTO role (title, salary, department_id) VALUES 
('Sales Lead', 100000.00, 1),
('Sales Person', 80000.00, 1),
('Lead Engineer', 150000.00, 2),
('Software Engineer', 120000.00, 2),
('HR Lead', 90000.00, 3),
('HR Assistant', 60000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Hugh', 1, null),
('Jane', 'Doly', 2, 1),
('Emily', 'Smith', 3, null),
('Michael', 'Brown', 4, 3),
('Sarah', 'Davis', 5, null),
('David', 'Chen', 6, 5);
