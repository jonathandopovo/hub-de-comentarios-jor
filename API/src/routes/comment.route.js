const express = require("express");
const CommentController = require("../controller/comment.controller");
const LoginController = require("../controller/login.controller");
const CommentRouter = express.Router();

CommentRouter.get("/", CommentController.getComments);

CommentRouter.get("/:id", CommentController.getCommentById);

CommentRouter.get("/user/:userId", CommentController.getCommentsByUserId);

CommentRouter.post(
  "/add",
  LoginController.isAuthenticated,
  CommentController.addComment
);

CommentRouter.put(
  "/update",
  LoginController.isAuthenticated,
  CommentController.updateComment
);

CommentRouter.delete(
  "/delete/:id",
  LoginController.isAuthenticated,
  CommentController.deleteComment
);

module.exports = CommentRouter;
