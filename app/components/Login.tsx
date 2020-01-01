import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import themes from "../styles/themes";
import { loginUser } from "../actions/UserActions";
import userStore from "../stores/UserStore";
import { StackNavigationProp } from "@react-navigation/stack";
import { GeneralTypes } from "..";
import LoginInput from "./presentational/LoginInput";
import LoginButton from "./presentational/LoginButton";

interface LoginProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: StackNavigationProp<any, any>;
}

export default function Login(props: LoginProps) {
  const [loggingIn, setLoggingIn] = React.useState<boolean>(false);

  const [email, setEmail] = React.useState<string>(() => {
    // enter email if its avialable locally
    return userStore.getUser().email || "";
  });
  const [password, setPassword] = React.useState<string>("");

  React.useEffect(() => {
    const onMailChange = () => {
      setEmail(userStore.getUser().email);
    };

    userStore.on("userInfoChange", onMailChange);

    return () => {
      userStore.off("userInfoChange", onMailChange);
    };
  }, []);

  const handlePress = () => {
    setLoggingIn(true);

    /* ---------------
    An async request will be sent to backend in the future
    in place of this placeholder
    --------------- */

    const user: GeneralTypes.User = {
      username: "Spinzed the Fox",
      email,
      picture: require("../static/images/fox.png"),
    };

    loginUser(user);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <LoginInput style={styles.input} onChangeText={(text) => setEmail(text)}
        value={email} placeholder={"Email"} />

      <LoginInput style={styles.input} onChangeText={(text) => setPassword(text)}
        value={password} placeholder={"Password"} secureTextEntry />

      <LoginButton style={styles.submit}
        onPress={() => handlePress()} disabled={loggingIn} label={"Submit"} />

      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "white" }}>Don't have an account?</Text>
        <TouchableNativeFeedback onPress={() => props.navigation.navigate("Register")}>
          <Text style={{ color: "#a8c3f0" }}>Register</Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: themes.dark.dark,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#d3e2f5", fontSize: 34,
  },
  input: {
    width: "60%",
    paddingVertical: "5%",
  },
  submit: {
    width: "50%",
    paddingTop: "5%",
    paddingBottom: "5%"
  }
});
