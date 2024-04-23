import { mapComments } from "../models/comment.model.js";

const URL_API = "http://localhost:7000";

const UserService = {
  apiGetUserComments: (userId) => {
    return new Promise((resolve, reject) => {
      fetch(`${URL_API}/comment/user/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            resolve(mapComments(data.comments));
          } else {
            reject(data.error);
          }
        });
    });
  },
  apiEditUserComments: (user) => {
    return new Promise((resolve, reject) => {
      fetch(`${URL_API}/user/edit`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            resolve("Editado com sucesso!");
          } else {
            reject(data.error);
          }
        });
    });
  },
};

export default UserService;
