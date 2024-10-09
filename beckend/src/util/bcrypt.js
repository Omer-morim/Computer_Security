const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password.toString(), 10, function (err, hash) {
      if (err) return reject(err);
      return resolve(hash);
    });
  });
};

const comparePassword = (hash, password) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password.toString(), hash, function (err, result) {
      if (err) return reject(err);
      return resolve(result); // `bcrypt.compare` מחזיר true או false ישירות
    });
  });
};

module.exports = { comparePassword, hashPassword };
