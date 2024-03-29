import { formatDate, darkColors, lightColors } from "../utils.js";
import { CommentService } from "../services/comment.service.js";
import { Comment } from "../models/comment.model.js";

const getInputComment = () => {
  return {
    author: document.getElementById("inputAuthor"),
    comment_text: document.getElementById("inputComment"),
  };
};

const getInputCommentValue = () => {
  return {
    author: document.getElementById("inputAuthor").value,
    comment_text: document.getElementById("inputComment").value,
  };
};

const setInputComment = (authorValue, commentValue) => {
  const { author, comment_text } = getInputComment();
  author.value = authorValue;
  comment_text.value = commentValue;
};

const clearCommentField = () => {
  const { comment_text } = getInputComment();
  comment_text.value = "";
};

const submitComment = (e) => {
  e.preventDefault();

  const comment = getInputCommentValue();

  CommentService.apiPostComment(comment)
    .then((response) => {
      alert(response);
      clearCommentField();
      loadComment();
    })
    .catch((error) => {
      console.error(error);
    });
};

const loadComment = async () => {
  CommentService.apiGetComment()
    .then((result) => {
      const comments = result.map(
        (comment) =>
          new Comment(
            comment.id,
            comment.author,
            comment.comment_text,
            comment.created_at,
            comment.updated_at
          )
      );

      displayComment(comments);
    })
    .catch((error) => {
      console.error(error);
      alert(error);
    });
};

const displayComment = (comments) => {
  const divComments = document.getElementById("feed-comentarios");
  divComments.innerHTML = ``;
  
  // Reverse para ordenar da mais recente para a mais antiga
  comments.reverse().forEach((element) => {
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
          <rect width="100%" height="100%" fill="${darkColors()}"></rect>
          <text x="38%" y="55%" fill="${lightColors()}" dy=".3em">${element
      .getAuthor()
      .charAt(0)}</text>
        </svg>
        <p class="pb-3 mb-0 small lh-sm border-bottom">
          <strong class="d-block text-gray-dark">@${element.getAuthor()}</strong>
          ${element.getComment_text()}
        </p>
        <small class="date">${formatDate(element.getCreatedAt())}</small>
      </div>
    `;
    divComments.appendChild(divDisplay);
  });
};

const CommentComponnent = {
  run: () => {
    const formComment = document.getElementById("formComment");
    formComment.addEventListener("submit", submitComment);
    window.onload = () => {
      loadComment();
    };
  },

  params: (usr) => {
    _user = usr;
  },
};

export { CommentComponnent };
