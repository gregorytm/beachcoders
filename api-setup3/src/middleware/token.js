const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = require("../../config");

function createToken(user) {
  console.assert(
    user.id !== undefined,
    "createToken was passed a user without an id property"
  );

  let payload = {
    userId: user.id,
  };
  console.log(payload);
  return jwt.sign(payload, ACCESS_TOKEN_SECRET);
}

module.exports = { createToken };
