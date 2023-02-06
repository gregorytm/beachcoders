// require("dotenv").config();

const express = require("express");
const { BadRequestError, NotFoundError } = require("../../ExpressError");
const Employee = require("../models/Employee");
import { authenticateToken } from "../middleware/authenticateToken";
const { SECRET_KEY } = require("../../config");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/personnel", async function (req, res, next) {
  try {
    const employees = await Employee.getAll();
    return res.json({ employees });
  } catch (err) {
    return next(err);
  }
});

router.post("/register", async function (req, res, next) {
  try {
    const newEmployee = await Employee.register({
      ...req.body,
    });
    console.log("test", newEmployee);
    return res.status(201).json({ newEmployee });
  } catch (err) {
    return next(err);
  }
});

router.post("/login", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const employee = await Employee.login(username, password);
    console.log("11", SECRET_KEY);
    const accessToken = jwt.sign(employee, SECRET_KEY);
    res.json({ accessToken: accessToken });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
