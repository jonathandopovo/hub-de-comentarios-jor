let data = [
  {
    author: "Enzo",
    comment:
      "Na minha humida opniau, axo q iscola n da futuru pq conheso genti rika q n estudo😒😒",
    date: "7 de mar., 19hrs",
  },
];

const getHrAndData = () => {
  const currentDate = new Date();
  const options = { day: "numeric", month: "short", hour: "numeric" };
  const date = `${currentDate.toLocaleDateString("pt-BR", options)}hrs`;

  return date;
};

const submitComment = (e) => {
  e.preventDefault();
  const author = inputAuthor.value;
  const comment = inputComment.value;
  const date = getHrAndData();

  data.push({ author, comment, date });
  loadComment();
};

const loadComment = () => {
  if (data) {
    displayComment();
  }
};

const displayComment = () => {
  const divComments = document.getElementById("feed-comentarios");
  divComments.innerHTML = ``;
  data.forEach((element) => {
    const divDisplay = document.createElement("div");
    divDisplay.innerHTML = `
    <div class="d-flex text-body-secondary pt-3 comment-div">
        <svg
          class="bd-placeholder-img flex-shrink-0 me-2 rounded"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 32x32"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Comentário</title>
          <rect width="100%" height="100%" fill="#007bff"></rect>
          <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
        </svg>
        <p class="pb-3 mb-0 small lh-sm border-bottom">
          <strong class="d-block text-gray-dark">@${element.author}</strong>
          ${element.comment}
        </p>
        <small class="date">${element.date}</small>
      </div>
    `;
    divComments.appendChild(divDisplay);
  });
};

const formComment = document.getElementById("formComment");
formComment.addEventListener("submit", submitComment);

loadComment();
