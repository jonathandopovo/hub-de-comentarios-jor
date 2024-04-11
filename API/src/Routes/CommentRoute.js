const express = require("express");
const router = express.Router();
const CommentController = require("../Controllers/CommentController");

router.get("/comment", CommentController.getComments);
router.get("/user-comments/:userId", CommentController.getCommentsByUserId);
router.post("/new-comment", CommentController.createComment);

module.exports = router;
