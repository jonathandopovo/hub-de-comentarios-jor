class Comment {
  constructor(id, author, comment_text, createdAt, updatedAt) {
    if (
      id !== undefined &&
      author !== undefined &&
      comment_text !== undefined &&
      createdAt !== undefined &&
      updatedAt !== undefined
    ) {
      this.id = id;
      this.author = author;
      this.comment_text = comment_text;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    } else if (author !== undefined && comment_text !== undefined) {
      this.id = null;
      this.author = author;
      this.comment_text = comment_text;
      this.createdAt = null;
      this.updatedAt = null;
    } else {
      this.id = null;
      this.author = null;
      this.comment_text = null;
      this.createdAt = null;
      this.updatedAt = null;
    }
  }

  getId() {
    return this.id;
  }

  getAuthor() {
    return this.author;
  }

  setAuthor(author) {
    this.author = author;
  }

  getComment_text() {
    return this.comment_text;
  }

  setComment_text(comment_text) {
    this.comment_text = comment_text;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }
}

export { Comment };
