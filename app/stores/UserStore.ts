import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { GeneralTypes } from "..";

class UserStore extends EventEmitter {
  protected user: GeneralTypes.User = {
    username: "Spinzed the Fox",
    email: "davor.najev@gmail.com",
    picture: require("../static/images/fox.png"),
  };

  protected loggedIn = false;

  public getUser: () => GeneralTypes.User = () => {
    return this.user;
  }

  public isLoggedIn = () => {
    return this.loggedIn;
  }

  public setUserInfo = (user: GeneralTypes.User) => {
    this.user = {
      username: user.username,
      email: user.email,
      picture: user.picture,
    };
    this.emit("userInfoChange");
  }

  public setLoginStatus = (status: boolean) => {
    this.loggedIn = status;
    this.emit("loginStatusChange");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public handleActions = (action) => {
    switch (action.type) {
      case "LOGIN":
        this.setLoginStatus(true);
        this.setUserInfo(action.user);
        break;
      case "LOGOUT":
        this.setLoginStatus(false);
        this.setUserInfo({
          username: "",
          email: "",
          picture: undefined,
        });
        break;
      default:
        break;
    }
  }
}

const userStore = new UserStore();

dispatcher.register(userStore.handleActions);

export default userStore;
