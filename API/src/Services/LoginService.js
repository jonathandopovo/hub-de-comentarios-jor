const express = require("express");
const router = express.Router();
const db = require("../connection");

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.query(
    "SELECT * FROM user WHERE username = ? AND password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, error: "Internal server error" });
      }
      if (results.length > 0) {
        const { id, username, firstname, lastname } = results[0];
        return res.json({
          success: true,
          user: { id, username, firstname, lastname },
        });
      } else {
        return res.json({
          success: false,
          error: "Usuário ou senha inválidos",
        });
      }
    }
  );
});

module.exports = router;
