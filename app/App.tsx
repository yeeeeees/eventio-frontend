import React from "react";
import userStore from "./stores/UserStore";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import Main from "./components/Main";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { View } from "react-native";
import { getScreenHeight } from "./utils/screen";

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
    return (
      <View style={{ height: getScreenHeight() }}>
        <Main />
      </View>
    );
  else
    return <LoginScreenComponent />;
}

const Navigator = createStackNavigator(
  {
    LoginScreen,
    RegisterScreen
  },
  {
    initialRouteName: "LoginScreen",
    headerMode: "none"
  }
);

const LoginScreenComponent = createAppContainer(Navigator);
