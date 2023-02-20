const DB_URI = "postgresql:///delivery_co";

const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET ||
  "0119b1f6e8a3616b8830c66374ffcd205305044316dd0cd1bce75ca0fb6f7cbb90d9626332da115afba2be96812638f93ec6df978fa2c0d5a1215f3503827500";

const REFRESH_TOKEN_SECRET =
  "a121cbbc1bd90372930839df95e82facf2ff8d1bcd5afa1c62de2b802bbf9c93bd2f7d35cc0c52598a6ee44883804ec8009b98c49f043e1347f1b028fe51616a";

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  DB_URI,
  ACCESS_TOKEN_SECRET,
  BCRYPT_WORK_FACTOR,
};

//to gen random passwords
// open terminal and type node
// then type require("crypto").randomBytes(64).toString("hex");
