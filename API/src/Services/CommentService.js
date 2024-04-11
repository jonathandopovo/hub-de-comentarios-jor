const db = require("../connection");

const CommentService = {
  getComments: async () => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT comment.id, comment.userId, user.firstname as author, comment.comment_text, comment.created_at, comment.updated_at FROM `comment-hub` .comment INNER JOIN user ON comment.userId = user.id ORDER BY comment.updated_at DESC;",
        (err, result) => {
          if (err) {
            reject(err);
          }

          resolve(result);
        }
      );
    });
  },
  getCommentsByUserId: async (userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT comment.id, user.firstname as author, comment.comment_text, comment.created_at, comment.updated_at FROM `comment-hub` .comment INNER JOIN user ON comment.userId = user.id WHERE userId = ? ORDER BY comment.updated_at DESC;",
        [userId],
        (err, result) => {
          if (err) {
            reject(err);
          }

          resolve(result);
        }
      );
    });
  },
  createComment: (userId, comment_text) => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO comment (userId, comment_text) VALUES (?,?)",
        [userId, comment_text],
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve("");
        }
      );
    });
  },
};

module.exports = CommentService;
