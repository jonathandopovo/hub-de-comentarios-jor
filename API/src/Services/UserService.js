const db = require("../connection");

const UserService = {
  getUsers: async () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user", (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  },
  getUserById: (userId) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user WHERE id =?", [userId], (err, result) => {
        if (err) {
          reject(err);
        }
        if (result.length > 0) {
          resolve(result);
        } else {
          reject("Usuário não encontrado!");
        }
      });
    });
  },
};

module.exports = UserService;
