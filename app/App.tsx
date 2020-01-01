import React from "react";
import userStore from "./stores/UserStore";
import Login from "./components/Login";
import Main from "./components/Main";
import Register from "./components/Register";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(() => {
    return userStore.isLoggedIn();
  });

  // dayum son I love hooks
  React.useEffect(() => {
    userStore.on("loginStatusChange", () => {
      setLoggedIn(userStore.isLoggedIn());
    });
  }, []);

  if (loggedIn)
    return <Main />;
  else
    return <LoginScreenHandler />;
}

const Navigator = createStackNavigator(
  {
    Login,
    Register
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const LoginScreenHandler = createAppContainer(Navigator);
