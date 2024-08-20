-- Insert departments
INSERT INTO department (name) VALUES ('HR'), ('Engineering'), ('Sales');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
('Recruiter', 60000, (SELECT id FROM department WHERE name = 'HR')),
('Software Engineer', 80000, (SELECT id FROM department WHERE name = 'Engineering')),
('Sales Representative', 70000, (SELECT id FROM department WHERE name = 'Sales'));

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', (SELECT id FROM role WHERE title = 'Recruiter'), NULL),
('Jane', 'Smith', (SELECT id FROM role WHERE title = 'Software Engineer'), NULL),
('Emily', 'Johnson', (SELECT id FROM role WHERE title = 'Sales Representative'), (SELECT id FROM employee WHERE first_name = 'John' AND last_name = 'Doe'));
