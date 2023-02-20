// require("dotenv").config();

const express = require("express");
const { BadRequestError, NotFoundError } = require("../../ExpressError");
const Employee = require("../models/Employee");
// const { authenticateToken } = require("../middleware/authenticateToken");
const {
  ensureAdmin,
  ensureManager,
  ensureUser,
} = require("../middleware/authenticateToken");
const { createToken } = require("../middleware/token");
const { ACCESS_TOKEN_SECRET } = require("../../config");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/personnel", ensureAdmin, async function (req, res, next) {
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
    console.log("11", ACCESS_TOKEN_SECRET);
    const accessToken = jwt.sign(employee, ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });
  } catch (err) {
    return next(err);
  }
});

router.post("/token", async function (req, res, next) {
  try {
    console.log("test", req.body);
    const { username, password } = req.body;
    const employee = await Employee.authenticate(username, password);
    const token = createToken(employee);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
