const inquirer = require("inquirer");
const db = require("./db");

async function main() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      "View all departments",
      "Add a department",
      "View all roles",
      "Add a role",
      "View all employees",
      "Add an employee",
      "Update an employee role",
      "Exit",
    ],
  });

  switch (answer.action) {
    case "View all departments":
      const departments = await db.viewAllDepartments();
      console.table(departments);
      break;
    case "Add a department":
      const departmentName = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Enter the name of the department:",
      });
      await db.addDepartment(departmentName.name);
      console.log("Department added successfully!");
      break;
    case "View all roles":
      const roles = await db.viewAllRoles();
      console.table(roles);
      break;
    case "Add a role":
      const roleData = await inquirer.prompt([
        {
          type: "input",
          name: "title",
          message: "Enter the title of the role:",
        },
        {
          type: "input",
          name: "salary",
          message: "Enter the salary of the role:",
        },
        {
          type: "input",
          name: "department_id",
          message: "Enter the department ID of the role:",
        },
      ]);
      await db.addRole(roleData.title, roleData.salary, roleData.department_id);
      console.log("Role added successfully!");
      break;
    case "View all employees":
      const employees = await db.viewAllEmployees();
      console.table(employees);
      break;
    case "Add an employee":
      const employeeData = await inquirer.prompt([
        {
          type: "input",
          name: "first_name",
          message: "Enter the first name of the employee:",
        },
        {
          type: "input",
          name: "last_name",
          message: "Enter the last name of the employee:",
        },
        {
          type: "input",
          name: "role_id",
          message: "Enter the role ID of the employee:",
        },
        {
          type: "input",
          name: "manager_id",
          message: "Enter the manager ID of the employee:",
        },
      ]);
      await db.addEmployee(
        employeeData.first_name,
        employeeData.last_name,
        employeeData.role_id,
        employeeData.manager_id
      );
      console.log("Employee added successfully!");
      break;
    case "Update an employee role":
      const updateData = await inquirer.prompt([
        {
          type: "input",
          name: "employee_id",
          message: "Enter the ID of the employee you want to update:",
        },
        {
          type: "input",
          name: "role_id",
          message: "Enter the new role ID of the employee:",
        },
      ]);
      await db.updateEmployeeRole(updateData.employee_id, updateData.role_id);
      console.log("Employee role updated successfully!");
      break;
    case "Exit":
      process.exit();
  }

  main();
}

main().catch(console.error);
