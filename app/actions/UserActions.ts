import dispatcher from "../dispatcher";
import { GeneralTypes } from "..";

export function loginUser(newUser: GeneralTypes.User) {
  dispatcher.dispatch({
    type: "LOGIN",
    user: newUser
  });
}

export function logout() {
  dispatcher.dispatch({
    type: "LOGOUT"
  });
}
