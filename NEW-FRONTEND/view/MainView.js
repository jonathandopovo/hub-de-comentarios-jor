import { randomColors, formatDate } from "../utils.js";

const View = {
  render() {
    const root = document.getElementById("root");
    root.innerHTML = `
    <div id="LeftSide">
    </div>
    <div id="RightSide">
    </div>
    `;
  },
  renderLogin() {},
  renderCommentFeed(comments, title) {
    const rightSide = document.getElementById("RightSide");
    rightSide.innerHTML = "";

    const feedTitle = document.createElement("div");
    feedTitle.innerHTML = `<h5 class="border-bottom pb-2 mb-0">${
      title ? title : "Feed"
    }</div>`;

    rightSide.appendChild(feedTitle);
    const commentFeed = document.createElement("div");
    commentFeed.setAttribute("id", "comment-feed");
    commentFeed.setAttribute(
      "class",
      "comments col my-3 p-3 bg-body rounded shadow"
    );
    if (comments && comments.length > 0) {
      comments.forEach((item) => {
        const commentDiv = document.createElement("div");
        commentDiv.setAttribute("id", `${item.getAuthor()}-${item.getId()}`);
        commentDiv.className = "d-flex text-body-secondary pt-3 border-bottom";
        commentDiv.innerHTML = `
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>comentário</title>
                <rect width="100%" height="100%" fill="#${
                  randomColors().dark
                }"></rect>
                <text x="35%" y="50%" fill="#${
                  randomColors().light
                }"dy=".3em">${item.getAuthor().charAt(0)}</text>
            </svg>
            <p class="pb-3 mb-0 small lh-sm text-gray-dark">
                <strong class="d-block text-gray-dark">@${item.getAuthor()}
                <span class="date-style badge text-bg-secondary">${formatDate(
                  item.getCreatedAt()
                )}</span>
                </strong>
                <span class="comment">
                ${item.getComment()}
                </span>
            </p>        
        `;
        commentsGroup.appendChild(commentDiv);
      });

      rightSide.appendChild(commentsGroup);
    } else {
      commentFeed.innerHTML = "Nenhum comentário foi encontrado";
    }
  },
  renderPostComment() {},
};
