const inquirer = require('inquirer');
const db = require('./db');

// Display menu and handle choices
async function displayMenu() {
    const { choice } = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
            'Exit'
        ]
    });

    switch (choice) {
        case 'View All Departments':
            await viewDepartments();
            break;
        case 'View All Roles':
            await viewRoles();
            break;
        case 'View All Employees':
            await viewEmployees();
            break;
        case 'Add a Department':
            await addDepartment();
            break;
        case 'Add a Role':
            await addRole();
            break;
        case 'Add an Employee':
            await addEmployee();
            break;
        case 'Update an Employee Role':
            await updateEmployeeRole();
            break;
        case 'Exit':
            console.log('Exiting the application.');
            process.exit();
    }

    displayMenu(); // Show the menu again after the operation
}

// View All Departments
async function viewDepartments() {
    const departments = await db.getDepartments();
    console.table(departments);
}

// View All Roles
async function viewRoles() {
    const roles = await db.getRoles();
    console.table(roles);
}

// View All Employees
async function viewEmployees() {
    const employees = await db.getEmployees();
    console.table(employees);
}

// Add a Department
async function addDepartment() {
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter the department name:'
    });

    await db.addDepartment(name);
    console.log('Department added successfully.');
}

// Add a Role
async function addRole() {
    const { title, salary, departmentId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the role title:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for this role:'
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID:'
        }
    ]);

    await db.addRole(title, salary, departmentId);
    console.log('Role added successfully.');
}

// Add an Employee
async function addEmployee() {
    const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter the employee\'s first name:'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter the employee\'s last name:'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the role ID for the employee:'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID for the employee (leave blank if none):',
            default: null
        }
    ]);

    await db.addEmployee(firstName, lastName, roleId, managerId);
    console.log('Employee added successfully.');
}

// Update an Employee Role
async function updateEmployeeRole() {
    const { employeeId, newRoleId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the employee ID to update:'
        },
        {
            type: 'input',
            name: 'newRoleId',
            message: 'Enter the new role ID for the employee:'
        }
    ]);

    await db.updateEmployeeRole(employeeId, newRoleId);
    console.log('Employee role updated successfully.');
}

// Start the application
displayMenu();
