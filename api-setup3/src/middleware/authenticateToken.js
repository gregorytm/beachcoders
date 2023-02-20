const { ACCESS_TOKEN_SECRET } = require("../../config");
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../../ExpressError");
const Employee = require("../models/employee");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log("test1", authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// async function getEmployeeForToken(req) {
//   const authHeader = req.header && req.headers.authorization;
//   if (!authHeader) {
//     console.log("auth header not supplied");
//     return;
//   }

//   const token = authHeader && authHeader.split(" ")[1];
//   if (token === null) return res.sendStatus(401);
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

async function getEmployeeForToken(req) {
  const authHeader = req.header && req.headers.authorization;
  if (!authHeader) {
    console.log("auth header not supplied");
    return;
  }

  const token = authHeader.replace(/^[Bb]earer /, "").trim();
  const parsedToken = jwt.verify(token, ACCESS_TOKEN_SECRET);
  if (
    typeof parsedToken !== "object" ||
    parsedToken === null ||
    typeof parsedToken.userId !== "number"
  ) {
    console.log("token payload invalid", parsedToken);
    return;
  }
  try {
    console.log("testtest", typeof parsedToken.userId);
    return await Employee.get(parsedToken.userId);
  } catch (e) {
    console.log("failure reading employee", e);
    return;
  }
}

/** Middleware to use when employee is active
 *
 * if not raise Unauthorized
 */

async function ensureUser(req, res, next) {
  try {
    const employee = await getEmployeeForToken(req);
    if (employee) {
      const role = employee.role;
      if (role === "user" || role === "manager" || role === "admin") {
        return next();
      }
    }

    throw new UnauthorizedError();
  } catch (err) {
    return next(err);
  }
}

/**Middleware to use when they need to be logged in as manager
 *
 * if not, raises Unauthorized
 */

async function ensureManager(req, res, next) {
  try {
    const employee = await getEmployeeForToken(req);
    if (employee) {
      const role = employee.role;
      if (role === "manager" || role === "admin") {
        return next();
      }
    }

    throw new UnauthorizedError();
  } catch (err) {
    return next(err);
  }
}

/**Middleware to use when they need to be logged in as admin user
 *
 * if not, raises Unauthorized
 */

async function ensureAdmin(req, res, next) {
  try {
    const employee = await getEmployeeForToken(req);
    if (employee) {
      const role = employee.role;
      if (role === "admin") {
        return next();
      }
    }

    throw new UnauthorizedError();
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  ensureUser,
  ensureAdmin,
  ensureManager,
};

// module.exports = { authenticateToken };
