import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import themes from "../../styles/themes";
import { loginUser } from "../../actions/UserActions";
import userStore from "../../stores/UserStore";
import { StackNavigationProp } from "@react-navigation/stack";
import { GeneralTypes } from "../..";
import LoginInput from "../presentational/LoginInput";
import LoginButton from "../presentational/LoginButton";
import { getScreenHeight } from "../../utils/screen";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../../graphql/mutations";
import validator from "validator";
import { sha256 } from "js-sha256";
import { salt } from "../../utils/hashing";

interface LoginProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: StackNavigationProp<any, any>;
}

export default function Login(props: LoginProps) {
  const [loggingIn, setLoggingIn] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState("");

  const [email, setEmail] = React.useState<string>(() => {
    // enter email if its available locally
    return userStore.getUser().email || "lol@gmail.com";
  });
  const [password, setPassword] = React.useState<string>("test123");
  const [loginUserMut] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      if (data.error) {
        setMessage("An unexpected error has occured");
        setLoggingIn(false);
        return;
      }

      if (!data.loginUser.success) {
        setMessage(data.loginUser.message || "An unexpected error has occured");
        setLoggingIn(false);
        return;
      }

      const user: GeneralTypes.User = data.loginUser.user;
      const tokens: GeneralTypes.Tokens = {
        accessToken: data.loginUser.accessToken,
        refreshToken: data.loginUser.refreshToken
      };

      setLoggingIn(false);
      loginUser(user, tokens);
    },
    onError: () => {
      setMessage("An unexpected error has occured");
      setLoggingIn(false);
    }
  });

  React.useEffect(() => {
    const onMailChange = () => {
      setEmail(userStore.getUser().email);
    };

    userStore.on("userInfoChange", onMailChange);

    return () => {
      userStore.off("userInfoChange", onMailChange);
    };
  }, []);

  const handleLogin = async () => {
    setMessage("");
    setLoggingIn(true);

    // ------- start of validation
    if ([email, password].includes("")) {
      setMessage("All fields are required");
      setLoggingIn(false);
      return;
    }

    if (!validator.isEmail(email)) {
      setMessage("Invalid email");
      setLoggingIn(false);
      return;
    }
    // ------- end of validation

    // bcrypt is replaced with sha256
    // bcrypt.hash(password, 10, (err, hash) => {
    //   if (err) {
    //     setMessage("Unexpected error");
    //     setLoggingIn(false);
    //     return;
    //   }

    //   const formData = {
    //     email,
    //     password: hash
    //   };

    //   // graphql request
    //   loginUserMut({ variables: formData });
    // });

    const hash = sha256(salt(password));
    const formData = {
      email,
      password: hash
    };

    // graphql request
    loginUserMut({ variables: formData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <LoginInput style={styles.input} onChangeText={setEmail}
        value={email} placeholder={"Email"} />

      <LoginInput style={styles.input} onChangeText={setPassword}
        value={password} placeholder={"Password"} secureTextEntry />

      <LoginButton style={styles.submit}
        onPress={() => handleLogin()} disabled={loggingIn} label={"Submit"} />

      {loggingIn && <ActivityIndicator size="large" color={themes.dark.lighterer} />}

      {!!message && (
        <View style={styles.message}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      )}

      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "white" }}>Don't have an account?</Text>
        <TouchableNativeFeedback onPress={() => props.navigation.navigate("RegisterScreen")}>
          <Text style={{ color: "#a8c3f0" }}>Register</Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: getScreenHeight(),
    backgroundColor: themes.dark.backgroundDark,
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
  },
  message: {
    width: "70%",
    minHeight: "8%",
    backgroundColor: "#94140a",
    borderRadius: 5,
    marginBottom: "5%",
    alignItems: "center",
    justifyContent: "center"
  },
  messageText: {
    color: "white",
    padding: "5%",
    textAlign: "center"
  }
});
