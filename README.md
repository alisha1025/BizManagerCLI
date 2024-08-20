Business Management CLI Application

Overview
This is a command-line application designed to manage departments, roles, and employees in a business. It uses a PostgreSQL database to store data and provides a user-friendly command-line interface (CLI) for interacting with the database.

Features
View All Departments: Displays a list of all departments in a formatted table.
View All Roles: Displays all roles along with their associated departments and salaries.
View All Employees: Lists all employees with their details including roles and managers.
Add a Department: Allows adding a new department to the database.
Add a Role: Allows adding a new role, specifying its title, salary, and associated department.
Add an Employee: Allows adding a new employee, specifying their first name, last name, role, and manager.
Update an Employee Role: Allows updating the role of an existing employee.
Requirements
Node.js
PostgreSQL
Setup
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/business-management-cli.git
cd business-management-cli
Install Dependencies

Make sure you have Node.js and npm installed. Run the following command to install required packages:

bash
Copy code
npm install
Setup PostgreSQL Database

Create a PostgreSQL database and configure it with the necessary tables and initial data.

Create the database schema by running:

bash
Copy code
psql -U your_user -d your_database -f data/schema.sql
Seed the database with initial data:

bash
Copy code
psql -U your_user -d your_database -f data/seeds.sql
Replace your_user and your_database with your PostgreSQL user and database name.

Configure Database Connection

Update the src/db.js file with your PostgreSQL connection details:

javascript
Copy code
const pool = new Pool({
    user: 'your_user',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});
Replace your_user, your_database, and your_password with your PostgreSQL credentials.

Usage
Start the application by running:

bash
Copy code
npm start
You will be presented with a menu of options. Use the CLI to interact with the database by selecting from the available options.

Examples
To view all departments, select the corresponding option from the menu.
To add a new department, choose the option to add a department and follow the prompts.
Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request. Make sure to follow the project's coding standards and include appropriate tests.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or feedback, please contact:

Email: alishalakha96@gmail.com
GitHub: alisha1025
