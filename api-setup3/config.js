const DB_URI = "postgresql:///delivery_co";

const SECRET_KEY =
  process.env.SECRET_KEY ||
  "0119b1f6e8a3616b8830c66374ffcd205305044316dd0cd1bce75ca0fb6f7cbb90d9626332da115afba2be96812638f93ec6df978fa2c0d5a1215f3503827500";

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};

//to gen random passwords
// open terminal and type node
// then type require("crypto").randomBytes(64).toString("hex");
