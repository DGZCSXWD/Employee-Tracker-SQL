# Employee-Tracker-SQL

This is a Node.js command-line application for managing a company's employee database, using Inquirer and MySQL2.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Functionality

When you start the application, you are presented with options to:

- View all departments
- Add a department
- View all roles
- Add a role
- View all employees
- Add an employee
- Update an employee role

When you choose to view all departments, roles, or employees, you are presented with a formatted table showing the relevant data.

When you choose to add a department, role, or employee, you are prompted to enter the necessary information, and that data is added to the database.

When you choose to update an employee role, you are prompted to select an employee to update and their new role, and this information is updated in the database.

## How to Use

1. Clone the repository to your local machine.
2. Run npm install to install all dependencies.
3. Run the schema.sql in your MySQL Workbench to set up the database.
4. Run the seed.sql in your MySQL Workbench to populate the database. Dummy data has been provided.
5. Update the connection.js file in the db folder with your personal MySQL credentials.
6. Run node index.js to start the application.

## Demo

You can access a live demo video [here](https://watch.screencastify.com/v/jOZX87F9bufcw1sLyHzE)
