let data = [];

const submitComment = (e) => {
  e.preventDefault();
  const author = inputAuthor.value;
  const comment = inputComment.value;

  data.push({ author, comment });
  loadComment();
};

const loadComment = () => {
  if (data) {
    displayComment();
  }
};

const displayComment = () => {
  const body = document.getElementById("form-comentario");
  data.forEach((element) => {
    const divDisplay = document.createElement("div");
    divDisplay.innerHTML = `
    <strong>${element.author}</strong>
    <p>${element.comment}</p>
    `;
    body.appendChild(divDisplay);
  });
};

const formComment = document.getElementById("formComment");
formComment.addEventListener("submit", submitComment);
