import { User } from "../models/user.model.js";
import { LoginService } from "../services/login.service.js";

const getLoginInputs = () => {
  return {
    username: document.getElementById("username"),
    password: document.getElementById("password"),
  };
};

const handleShowHide = () => {
  const newCommentTag = document.getElementById("form-comentario");
  const loginTag = document.getElementById("login-form");

  if (newCommentTag.classList.contains("d-none")) {
    newCommentTag.classList.remove("d-none");
    loginTag.classList.add("d-none");
  } else {
    newCommentTag.classList.add("d-none");
    loginTag.classList.remove("d-none");
  }
};

const handleLogin = (e) => {
  e.preventDefault();
  const { username, password } = getLoginInputs();

  const user = new User(username.value, password.value);

  LoginService.apiAuthUser(user).then((response) => {
    user.setId(response.id);
    user.setPassword(null);
    user.setFirstname(response.firstname);
    user.setLastname(response.lastname);

    const inputAuthor = document.querySelector("#inputAuthor");
    inputAuthor.disabled = true;
    inputAuthor.value = `${user.getFirstname()} ${user.getLastname()}`;
  });

  handleShowHide();
};

const loginComponent = {
  run: () => {
    const formLogin = document.getElementById("formLogin");
    formLogin.addEventListener("submit", handleLogin);
  },
};

export { loginComponent };
