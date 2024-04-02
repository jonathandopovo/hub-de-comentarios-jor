import { StoragedService } from "../../services/localStorage.service.js";
import { loadComment } from "../CommentComponent/CommentComponent.js";

const showUserData = () => {
  const formNewComment = document.getElementById("form-new-comment");
  const userData = document.getElementById("user-data");

  if (!formNewComment.classList.contains("d-none")) {
    formNewComment.classList.add("d-none");
    userData.classList.remove("d-none");
  }
};

const hiddenUserData = () => {
  const formNewComment = document.getElementById("form-new-comment");
  const userData = document.getElementById("user-data");

  if (formNewComment.classList.contains("d-none")) {
    formNewComment.classList.remove("d-none");
    userData.classList.add("d-none");
  }
};

const logout = () => {
  const newCommentTag = document.getElementById("form-comentario");
  const loginTag = document.getElementById("login-form");
  const pageHeader = document.getElementById("page-header");
  const userData = document.getElementById("user-data");
  const formNewComment = document.getElementById("form-new-comment");

  if (formNewComment.classList.contains("d-none")) {
    formNewComment.classList.remove("d-none");
    userData.classList.add("d-none");
  }

  newCommentTag.classList.add("d-none");
  pageHeader.classList.add("d-none");
  loginTag.classList.remove("d-none");

  const inputAuthor = document.querySelector("#inputAuthor");
  inputAuthor.disabled = false;
  inputAuthor.value = ``;
  changeUserTableData("", "", "", "", "");
  StoragedService.user.remove();

  const loadMyComments = document.getElementById("loadMyComments");
  if (loadMyComments.classList.contains("btn-secondary")) {
    loadMyComments.classList.remove("btn-secondary");
    loadMyComments.classList.add("btn-success");
    loadMyComments.innerText = "Carregar Meus Comentários";
    loadComment();
  }
};

const changeUserTableData = (id, username, password, firstname, lastname) => {
  const userTable = document.getElementsByTagName("td");
  userTable[0].innerText = id;
  userTable[1].innerText = username;
  userTable[2].innerText = password;
  userTable[3].innerText = firstname;
  userTable[4].innerText = lastname;
};

const userComponent = {
  run: () => {
    const showUserDataBtn = document.getElementById("show-user-data-btn");
    const logutBtn = document.getElementById("logout-btn");
    const backToFormButton = document.getElementById("back-to-comment-form");

    showUserDataBtn.addEventListener("click", showUserData);
    backToFormButton.addEventListener("click", hiddenUserData);
    logutBtn.addEventListener("click", logout);
  },
};

export { userComponent, changeUserTableData };
