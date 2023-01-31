const express = require("express");
const { BadRequestError } = require("../../ExpressError");
const Employee = require("../models/Employee");

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

module.exports = router;
