const URL_API = "http://localhost:8000/login";
import decodeJWT from "../lib/decodeJWT.js";
import { User } from "../models/user.model.js";

const LoginService = {
  apiAuthUser: (user) => {
    return new Promise((resolve, reject) => {
      fetch(`${URL_API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            sessionStorage.setItem("user", data.token);
            resolve("Usuário logado com sucesso!");
          } else {
            reject(data.error);
          }
        })
        .catch((error) => {
          reject("Erro na requisição AJAX:", error);
        });
    });
  },
  getUserSession: () => {
    const token = sessionStorage.getItem("user");
    if (token) {
      const payload = decodeJWT(token);
      if (payload) {
        const user = new User(
          payload.username,
          payload.password,
          payload.id,
          payload.firstname,
          payload.lastname
        );
        
        return user;
      }
    } else {
      return null;
    }
  },
};

export { LoginService };
