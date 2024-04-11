const express = require("express");
const router = express.Router();
const db = require("../connection");

router.get("/comment");
router.get("/user-comments/:userId");
router.post("/new-comment");

module.exports = router;