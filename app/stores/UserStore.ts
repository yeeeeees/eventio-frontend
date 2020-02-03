import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { GeneralTypes } from "..";

const EMPTY_USER = {
  uuid: undefined,
  username: "",
  email: "",
  fname: "",
  surname: "",
  profilePic: undefined,
  isVerified: undefined,
};

class UserStore extends EventEmitter {
  protected user: GeneralTypes.User = EMPTY_USER;

  protected loggedIn = false;

  protected tokens: GeneralTypes.Tokens = {
    accessToken: undefined,
    refreshToken: undefined
  }

  public getUser: () => GeneralTypes.User = () => {
    return this.user;
  }

  public isLoggedIn = () => {
    return this.loggedIn;
  }

  public setUserInfo = (user: GeneralTypes.User) => {
    this.user = user;
    this.emit("userInfoChange");
  }

  public setTokens = (tokens: GeneralTypes.Tokens) => {
    this.tokens = tokens;
    this.emit("tokenChange");
  }

  public setLoginStatus = (status: boolean) => {
    this.loggedIn = status;
    this.emit("loginStatusChange");
  }

  // idk shall I give a type to this
  public handleActions = (action) => {
    switch (action.type) {
      case "LOGIN":
        this.setLoginStatus(true);
        this.setUserInfo(action.user);
        break;
      case "LOGOUT":
        this.setLoginStatus(false);
        this.setUserInfo(EMPTY_USER);
        break;
      default:
        break;
    }
  }
}

const userStore = new UserStore();

dispatcher.register(userStore.handleActions);

export default userStore;
