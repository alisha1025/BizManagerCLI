const { Pool } = require('pg');

// Initialize PostgreSQL connection pool
const pool = new Pool({
    user: 'your_user',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

// Query functions
const getDepartments = async () => {
    const result = await pool.query('SELECT id, name FROM department');
    return result.rows;
};

const getRoles = async () => {
    const result = await pool.query(`
        SELECT r.id, r.title, r.salary, d.name AS department
        FROM role r
        JOIN department d ON r.department_id = d.id
    `);
    return result.rows;
};

const getEmployees = async () => {
    const result = await pool.query(`
        SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary, m.first_name || ' ' || m.last_name AS manager
        FROM employee e
        JOIN role r ON e.role_id = r.id
        JOIN department d ON r.department_id = d.id
        LEFT JOIN employee m ON e.manager_id = m.id
    `);
    return result.rows;
};

const addDepartment = async (name) => {
    await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
};

const addRole = async (title, salary, departmentId) => {
    await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
};

const addEmployee = async (firstName, lastName, roleId, managerId) => {
    await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId]);
};

const updateEmployeeRole = async (employeeId, newRoleId) => {
    await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [newRoleId, employeeId]);
};

module.exports = {
    getDepartments,
    getRoles,
    getEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};
