const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");

router.get("/users", UserController.getUsers);
router.get("/user-by-id/:userId", UserController.getUserById);

module.exports = router;
