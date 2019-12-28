import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { AppTypes } from "../..";

class UserStore extends EventEmitter {
  protected user: AppTypes.User = {
    name: "Spinzed the Fox",
    mail: "davor.najev@gmail.com",
    picture: require("../static/images/fox.png"),
    isLoggedIn: false,
  };

  public getUser() {
    return this.user;
  }

  public setUser = (user) => {
    this.user = user;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public handleActions = (action) => {
    return "";
  }
}

const userStore = new UserStore();

dispatcher.register(userStore.handleActions);

export default userStore;
