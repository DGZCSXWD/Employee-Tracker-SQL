const getConnection = require("./connection");

async function viewAllDepartments() {
  const db = await getConnection();
  const [rows] = await db.query("SELECT * FROM department");
  return rows;
}

async function addDepartment(name) {
  const db = await getConnection();
  const [result] = await db.query("INSERT INTO department (name) VALUES (?)", [
    name,
  ]);
  return result.insertId;
}

async function viewAllRoles() {
  const db = await getConnection();
  const [rows] = await db.query("SELECT * FROM role");
  return rows;
}

async function addRole(title, salary, department_id) {
  const db = await getConnection();
  const [result] = await db.query(
    "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
    [title, salary, department_id]
  );
  return result.insertId;
}

async function viewAllEmployees() {
  const db = await getConnection();
  const [rows] = await db.query("SELECT * FROM employee");
  return rows;
}

async function addEmployee(first_name, last_name, role_id, manager_id) {
  const db = await getConnection();
  const [result] = await db.query(
    "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
    [first_name, last_name, role_id, manager_id]
  );
  return result.insertId;
}

async function updateEmployeeRole(employee_id, role_id) {
  const db = await getConnection();
  await db.query("UPDATE employee SET role_id = ? WHERE id = ?", [
    role_id,
    employee_id,
  ]);
}

module.exports = {
  viewAllDepartments,
  addDepartment,
  viewAllRoles,
  addRole,
  viewAllEmployees,
  addEmployee,
  updateEmployeeRole,
};
