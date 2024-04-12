const UserService = require("../Services/UserService");

const UserController = {
  getUsers: (req, res) => {
    UserService.getUsers()
      .then((result) => {
        res.json({ success: true, users: result });
      })
      .catch((error) => {
        res.status(500).json({ success: false, error: error });
      });
  },
  getUserById: (req, res) => {
    const userId = req.params.userId;
    UserService.getUserById(userId)
      .then((result) => {
        res.json({ success: true, user: result });
      })
      .catch((error) => {
        res.status(500).json({ success: false, error: error });
      });
  },
};

module.exports = UserController;
