const express = require("express");
const router = express.Router();
const db = require("../connection");

router.get("/comment", (req, res) => {
  db.query(
    "SELECT comment.id, comment.userId, user.firstname as author, comment.comment_text, comment.created_at, comment.updated_at FROM `comment-hub` .comment INNER JOIN user ON comment.userId = user.id ORDER BY comment.updated_at DESC;",
    (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, error: err });
      }

      return res.json({ success: true, comment: result });
    }
  );
});

router.get("/user-comments/:userId", (req, res) => {
  const userId = req.params.userId;
  db.query(
    "SELECT comment.id, user.firstname as author, comment.comment_text, comment.created_at, comment.updated_at FROM `comment-hub` .comment INNER JOIN user ON comment.userId = user.id WHERE userId = ? ORDER BY comment.updated_at DESC;",
    [userId],
    (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, error: err });
      }

      return res.json({ success: true, comment: result });
    }
  );
});

router.post("/new-comment", (req, res) => {
  const { userId, comment_text } = req.body;
  db.query(
    "INSERT INTO comment (userId, comment_text) VALUES (?,?)",
    [userId, comment_text],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, error: "Internal server error" });
      }
      return res.json({ success: true });
    }
  );
});

module.exports = router;
