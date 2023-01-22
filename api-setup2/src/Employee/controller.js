const pool = require("../../db");
const queries = require("./queries");

const getEmployees = (req, res) => {
  pool.query(queries.getEmployees, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getEmeployeeById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getEmeployeeById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addEmployee = (req, res) => {
  const { username, password, first_inital, last_name, role } = req.body;
  //check for duplicate username
  pool.query(queries.checkUsernameExist, [username], (error, results) => {
    if (results.rows.length) {
      res.send("email already exists");
    }

    pool.query(
      queries.addEmployee,
      [username, password, first_inital, last_name, role],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("student created successfully");
      }
    );
  });
};

module.exports = {
  getEmployees,
  getEmeployeeById,
  addEmployee,
};
