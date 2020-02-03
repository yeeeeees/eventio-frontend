import React from "react";
import userStore from "./stores/UserStore";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import Main from "./components/Main";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { View } from "react-native";
import { getScreenHeight } from "./utils/screen";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import bcrypt from "react-native-bcrypt";
import isaac from "isaac";
import { BACKEND_URI } from "./constants";

bcrypt.setRandomFallback((len) => {
  const buf = new Uint8Array(len);
  return buf.map(() => Math.floor(isaac.random() * 256));
});

const Apollo = new ApolloClient({
  uri: BACKEND_URI
});

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

  return (
    <ApolloProvider client={Apollo}>
      {loggedIn && (
        <View style={{ height: getScreenHeight() }}>
          <Main />
        </View>
      )}
      {!loggedIn && <LoginScreenComponent />}
    </ApolloProvider>
  );
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
