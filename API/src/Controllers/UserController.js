const UserService = require("../Services/UserService");

const UserController = {
  getUsers: (req, res) => {
    UserService.getUsers()
      .then((result) => {
        res.json({ success: true, user: result });
      })
      .catch((error) => {
        res.status(500).json({ success: false, error: error });
      });
  },
};

module.exports = UserController;
