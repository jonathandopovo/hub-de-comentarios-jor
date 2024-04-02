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
      changeUserTableData(
        response.id,
        response.username,
        password.value.replace(/./g, "*"),
        response.firstname,
        response.lastname
      );

      user.setId(response.id);
      user.setPassword(password.value.replace(/./g, "*"));
      user.setFirstname(response.firstname);
      user.setLastname(response.lastname);

      loggedUser.user = user;
      StoragedService.user.store(user);

      username.value = "";
      password.value = "";

      const inputAuthor = document.querySelector("#inputAuthor");
      inputAuthor.disabled = true;
      inputAuthor.value = `${user.getFirstname()} ${user.getLastname()}`;

      handleShowHide();
    })
    .catch((error) => {
      alert(error);
    });
};

const loadStoragedUser = () => {
  if (StoragedService.user.get()) {
    const user = StoragedService.user.get();
    console.log(user);
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
