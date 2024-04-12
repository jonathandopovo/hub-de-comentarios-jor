const LoginService = require("../Services/LoginService");

const LoginController = {
  loginUser: (req, res) => {
    const { username, password } = req.body;
    LoginService.loginUser(username, password)
      .then((result) => {
        res.cookie("token", result, { httpOnly: true });
        res.json({ success: false, token: token });
      })
      .catch((error) => {
        res.status(500).json({ success: false, error: error });
      });
  },
};

module.exports = LoginController;
