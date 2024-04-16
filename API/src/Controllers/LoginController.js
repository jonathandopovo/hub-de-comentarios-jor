const LoginService = require("../Services/LoginService");

const LoginController = {
  loginUser: (req, res) => {
    const { username, password } = req.body;
    LoginService.loginUser(username, password)
      .then((token) => {
        res.cookie("token", token, { httpOnly: true });
        res.json({ success: true, token: token });
      })
      .catch((error) => {
        res.status(500).json({ success: false, error: error.message });
      });
  },
  logoutUser: () => {
    res.clearCookie("token");
    res.json({ success: true, message: "Usuário saiu com sucesso!" });
  },
};

module.exports = LoginController;
