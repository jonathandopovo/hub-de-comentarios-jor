const CommentService = require("../Services/CommentService");

const CommentController = {
  getComments: (req, res) => {
    CommentService.getComments()
      .then((result) => {
        res.json({ success: true, comment: result });
      })
      .catch((error) => {
        res.status(500).json({ success: false, error: error });
      });
  },
  getCommentsByUserId: (req, res) => {
    const userId = req.params.userId;
    CommentService.getCommentsByUserId(userId)
      .then((result) => {
        res.json({ success: true, comment: result });
      })
      .catch((error) => {
        res.status(500).json({ success: false, error: error });
      });
  },
  createComment: (req, res) => {
    const { userId, comment_text } = req.body;
    CommentService.createComment(userId, comment_text)
      .then((result) => {
        res.json({ success: true });
      })
      .catch((error) => {
        res.status(500).json({ success: false, error: error });
      });
  },
};

module.exports = CommentController;
