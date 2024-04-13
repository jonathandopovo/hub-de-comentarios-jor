const db = require("../connection");
const jwt = require("jsonwebtoken");

const LoginService = {
  loginUser: async (username, password) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM user WHERE username = ? AND password = ?",
        [username, password],
        (err, results) => {
          if (err) {
            reject(err);
          }
          if (results.length > 0) {
            const user = results[0];
            const token = jwt.sign(user, process.env.JWT_SECRET, {
              expiresIn: "1h",
            });
            
            resolve(token);
          } else {
            reject("Usuário ou senha inválidos");
          }
        }
      );
    });
  },
};

module.exports = LoginService;
