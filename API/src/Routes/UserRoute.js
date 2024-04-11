const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");

router.get("/user", UserController.getUsers);

module.exports = router;
