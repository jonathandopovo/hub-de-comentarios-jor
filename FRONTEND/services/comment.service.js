const URL_API = "http://localhost:8000";

const CommentService = {
  apiGetComment: () => {
    return new Promise((resolve, reject) => {
      fetch(`${URL_API}/comment`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            resolve(data.comment);
          } else {
            reject("Erro na requisição");
          }
        });
    }).catch((error) => {
      reject(error);
    });
  },
  apiPostComment: (comment) => {
    return new Promise((resolve, reject) => {
      fetch(`${URL_API}/new-comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            resolve("Comentário adicionado com sucesso!");
          } else {
            reject(data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }).catch((error) => {
      reject(error);
    });
  },
  apiGetCommentById: (userId) => {
    return new Promise((resolve, reject) => {
      fetch(`${URL_API}/comment-by-id`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            resolve(data.comment);
          } else {
            reject("Erro na requisição");
          }
        });
    }).catch((error) => {
      reject(error);
    });
  },
};

export { CommentService };
