import React from "react";
import { StyleSheet, View, Text } from "react-native";
import themes from "../../styles/themes";
import userStore from "../../stores/UserStore";
import { StackNavigationProp } from "@react-navigation/stack";
import LoginInput from "../presentational/LoginInput";
import LoginButton from "../presentational/LoginButton";

interface RegisterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: StackNavigationProp<any, any>;
}

export default function Register(props: RegisterProps) {
  const [isRegistering, setIsRegistering] = React.useState<boolean>(false);

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleRegister = () => {
    setIsRegistering(true);
    props.navigation.goBack(); // idk if this is needed

    /* ---------------
    An async request will be sent to backend in the future
    in place of this placeholder
    --------------- */

    const user = userStore.getUser();

    userStore.setUserInfo({
      username: user.username,
      email,
      picture: user.picture
    });
  };

  const handleCancel = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <LoginInput style={styles.input} onChangeText={(text) => setUsername(text)}
        value={username} placeholder={"Username"} />

      <LoginInput style={styles.input} onChangeText={(text) => setEmail(text)}
        value={email} placeholder={"Email"} />

      <LoginInput style={styles.input} onChangeText={(text) => setPassword(text)}
        value={password} placeholder={"Password"} secureTextEntry />

      <LoginInput style={styles.input} onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword} placeholder={"Confirm Password"} secureTextEntry />

      <View style={styles.bottomButtons}>
        <LoginButton style={styles.button} onPress={() => handleCancel()}
          disabled={isRegistering} label={"Cancel"} invert/>
        <LoginButton style={styles.button} onPress={() => handleRegister()}
          disabled={isRegistering} label={"Submit"} />
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
    color: "#d3e2f5",
    fontSize: 34,
    paddingBottom: "3%",
  },
  input: {
    width: "60%",
    paddingVertical: "2%",
  },
  bottomButtons: {
    width: "66%",
    flexDirection: "row",
    paddingTop: "5%",
    paddingBottom: "15%"
  },
  button: {
    flex: 1,
    paddingHorizontal: "5%"
  }
});
