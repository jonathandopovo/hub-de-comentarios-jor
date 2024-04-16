import { User } from "../../models/user.model.js";
import { LoginService } from "../../services/login.service.js";
import { changeUserTableData } from "../UserComponent/UserComponent.js";
import { StoragedService } from "../../services/localStorage.service.js";

const loggedUser = {
  user: undefined,
};

const getLoginInputs = () => {
  return {
    username: document.getElementById("username"),
    password: document.getElementById("password"),
  };
};

const handleShowHide = () => {
  const newCommentTag = document.getElementById("form-comentario");
  const loginTag = document.getElementById("login-form");
  const pageHeader = document.getElementById("page-header");

  if (newCommentTag.classList.contains("d-none")) {
    newCommentTag.classList.remove("d-none");
    pageHeader.classList.remove("d-none");
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

  LoginService.apiAuthUser(user)
    .then((response) => {
      const sessionUser = LoginService.getUserSession();
      sessionUser.setPassword(sessionUser.getPassword().replace(/./g, "*"));

      changeUserTableData(
        sessionUser.getId(),
        sessionUser.getUsername(),
        sessionUser.getPassword(),
        sessionUser.getFirstname(),
        sessionUser.getLastname()
      );

      loggedUser.user = sessionUser;
      StoragedService.user.store(sessionUser);

      username.value = "";
      password.value = "";

      const inputAuthor = document.querySelector("#inputAuthor");
      inputAuthor.disabled = true;
      inputAuthor.value = `${sessionUser.getFirstname()} ${sessionUser.getLastname()}`;

      handleShowHide();
    })
    .catch((error) => {
      alert(error);
    });
};

const loadStoragedUser = () => {
  if (StoragedService.user.get()) {
    const user = StoragedService.user.get();
    loggedUser.user = user;

    changeUserTableData(
      user.getId(),
      user.getUsername(),
      user.getPassword(),
      user.getFirstname(),
      user.getLastname()
    );

    const inputAuthor = document.querySelector("#inputAuthor");
    inputAuthor.disabled = true;
    inputAuthor.value = `${user.getFirstname()} ${user.getLastname()}`;

    handleShowHide();
  }
};

const loginComponent = {
  run: () => {
    loadStoragedUser();
    const formLogin = document.getElementById("formLogin");
    formLogin.addEventListener("submit", handleLogin);
  },
};

export { loginComponent, loggedUser };
