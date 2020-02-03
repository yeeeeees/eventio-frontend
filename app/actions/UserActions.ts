import dispatcher from "../dispatcher";
import { GeneralTypes } from "..";

export function loginUser(newUser: GeneralTypes.User, tokens: GeneralTypes.Tokens) {
  dispatcher.dispatch({
    type: "LOGIN",
    user: newUser,
    tokens
  });
}

export function logout() {
  dispatcher.dispatch({
    type: "LOGOUT"
  });
}
