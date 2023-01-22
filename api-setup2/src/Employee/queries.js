const getEmployees = "SELECT * FROM employee";
const getEmeployeeById = "SELECT * FROM employee WHERE id=$1";
const checkUsernameExist = "SELECT e FROM employee e WHERE e.username = $1";
const addEmployee =
  "INSERT INTO employee (username, password, first_inital, last_name, role) VALUES ($1,$2, $3, $4, $5)";

module.exports = {
  getEmployees,
  getEmeployeeById,
  checkUsernameExist,
  addEmployee,
};
