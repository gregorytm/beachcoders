const express = require("express");
const { NotFoundError } = require("./ExpressError");
const app = express();

const employeeRoutes = require("./src/routes/employee");

app.use(express.json());
app.use("/employee", employeeRoutes);

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

//404 error handler == matches everything
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

module.exports = app;
