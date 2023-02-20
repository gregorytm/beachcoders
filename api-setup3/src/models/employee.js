const db = require("../../db");
const bcrypt = require("bcrypt");

const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../../ExpressError");

const { BCRYPT_WORK_FACTOR } = require("../../config.js");

class Employee {
  static async register({
    username,
    password,
    first_inital: firstInital,
    last_name: lastName,
    role,
  }) {
    //check username availability
    const duplicateCheck = await db.query(
      `SELECT username
      FROM employee
      WHERE username = $1`,
      [username]
    );

    if (duplicateCheck.rows[0]) {
      throw new BadRequestError(`Duplicate username: ${username}`);
    }

    try {
      const salt = await bcrypt.genSalt(BCRYPT_WORK_FACTOR);
      const hashedPassword = await bcrypt.hash(password, salt);
      password = hashedPassword;
    } catch (err) {
      throw new BadRequestError(err);
    }

    const result = await db.query(
      `INSERT INTO employee
      (username,
        password,
        first_inital,
        last_name,
        role)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING username, first_inital AS "firstInital", last_name AS "lastName", role`,
      [username, password, firstInital, lastName, role]
    );
    const employee = result.rows[0];
    return employee;
  }
  static async getAll() {
    const result = await db.query(
      `SELECT id,
        username,
        first_inital AS "firstInital",
        last_name AS "lastName",
        role
      FROM employee`
    );
    return result.rows;
  }

  static async get(id) {
    const employeeRes = await db.query(
      `SELECT id,
      username,
      password,
      role
      FROM employee
      WHERE employee.id = $1`,
      [id]
    );
    const employee = employeeRes.rows[0];
    if (!employee) throw new NotFoundError(`No employee found`);
    return employee;
  }

  static async login(username, password) {
    //try to find the employee first
    const result = await db.query(
      `SELECT id,
      username,
      password
      FROM employee
      WHERE employee.username = $1`,
      [username]
    );
    const employee = result.rows[0];
    if (employee) {
      const isValid = await bcrypt.compare(password, employee.password);
      if (isValid === true) {
        delete employee.password;
        return employee;
      }
    }
    throw new UnauthorizedError("invalid employee/password");
  }

  static async authenticate(username, password) {
    const result = await db.query(
      `SELECT id,
      username,
      password,
      first_inital AS "firstInital",
      last_name AS "LastName",
      role
      FROM employee
      WHERE username =$1`,
      [username]
    );
    const employee = result.rows[0];
    console.assert(employee, `user not found${username}`);

    if (employee) {
      const isValid = await bcrypt.compare(password, employee.password);
      console.assert(isValid, "invalid password supplied");
      if (isValid === true) {
        delete employee.password;
        return employee;
      }
    }
    throw new UnauthorizedError("Invalid username/password");
  }
}

module.exports = Employee;
