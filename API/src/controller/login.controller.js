const LoginService = require("../services/login.services");
const jwt = require("jsonwebtoken");

const LoginController = {
  login: (req, res) => {
    const { username, password } = req.body;
    LoginService.authUser(username, password)
      .then((token) => {
        res.cookie("token", token, { httpOnly: true });
        res.json({ success: true, token: token });
      })
      .catch((error) => {
        res.status(500).json({ success: false, error: error.message });
      });
  },
  logout: (req, res) => {
    res.clearCookie("token");
    res.json({ success: true, message: "Logout concluído com sucesso" });
  },
  isAuthenticated: (req, res, next) => {
    const token = req.headers["authorization"];

    if (token) {
      jwt.verify(
        token.replace("Bearer ", ""),
        process.env.JWT_SECRET,
        (err, decodedToken) => {
          if (err) {
            res.status(401).json({ error: err, message: "Token inválido" });
          } else {
            req.user = decodedToken;
            next();
          }
        }
      );
    }
  },
};

module.exports = LoginController;
