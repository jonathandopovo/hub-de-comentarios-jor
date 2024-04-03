import { User } from "../models/user.model.js";

const StoragedService = {
  user: {
    store: (user) => {
      try {
        const storageAsJSON = JSON.stringify(user);
        localStorage.setItem("user", storageAsJSON);
      } catch (error) {
        console.error(error);
      }
    },
    get: () => {
      try {
        if (localStorage.getItem("user")) {
          const loadedUser = JSON.parse(localStorage.getItem("user"));
          const user = new User(
            loadedUser.username,
            loadedUser.password,
            loadedUser.id,
            loadedUser.firstname,
            loadedUser.lastname
          );
          return user;
        } else {
          console.log("Usuário não encontrado!");
        }
      } catch (error) {
        console.error(error);
      }
    },
    remove: () => {
      try {
        localStorage.removeItem("user");
      } catch (error) {
        console.error(error);
      }
    },
  },
};

export { StoragedService };
