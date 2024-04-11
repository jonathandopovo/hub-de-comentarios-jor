const LoginService = require("../Services/LoginService");

const LoginController = {
  loginUser: (req, res) => {
    const { username, password } = req.body;
    LoginService.loginUser(username, password)
      .then((result) => {
        res.json({ success: true, user: result });
      })
      .catch((error) => {
        res.status(500).json({ success: false, error: error });
      });
  },
};

module.exports = LoginController;
