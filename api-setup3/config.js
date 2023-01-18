const DB_URI = "postgresql:///delivery_co";

const SECRET_KEY = process.env.SECRET_KEY || "SECRET-dog-chatter71384";

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};
