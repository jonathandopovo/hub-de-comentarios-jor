const express = require("express");
const router = express.Router();
const LoginController = require("../Controllers/LoginController");

router.post("/login", LoginController.loginUser);
router.post("/logout", LoginController.logoutUser);

module.exports = router;
