const db = require("../connection");

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
            const { id, username, firstname, lastname } = results[0];
            resolve({ id, username, firstname, lastname });
          } else {
            reject("Usuário ou senha inválidos");
          }
        }
      );
    });
  },
};

module.exports = LoginService;
