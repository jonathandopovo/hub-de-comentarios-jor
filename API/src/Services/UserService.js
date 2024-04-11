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
};

module.exports = UserService;
