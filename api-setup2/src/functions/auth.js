const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainText = "testpas";
const plainText2 = "not bacon";

bcrypt.hash(plainText, saltRounds),
  function (err, hash) {
    console.log(result);
  };
