import View from "../view/MainView.js";
import CommentController from "./CommentController.js";

const Controller = {
  run: () => {
    View.render();
    CommentController.run();
  },
};
export default Controller;
