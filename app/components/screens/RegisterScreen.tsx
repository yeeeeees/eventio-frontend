import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import themes from "../../styles/themes";
import { StackNavigationProp } from "@react-navigation/stack";
import LoginInput from "../presentational/LoginInput";
import LoginButton from "../presentational/LoginButton";
import { ScrollView } from "react-native-gesture-handler";
import { CREATE_USER } from "../../graphql/mutations";
import { useMutation } from "@apollo/react-hooks";
import userStore from "../../stores/UserStore";
import bcrypt from "react-native-bcrypt";
import validator from "validator";
import isaac from "isaac";
import { sha256 } from "js-sha256";

bcrypt.setRandomFallback((len) => {
  const buf = new Uint8Array(len);
  return buf.map(() => Math.floor(isaac.random() * 256));
});

interface RegisterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: StackNavigationProp<any, any>;
}

export default function Register(props: RegisterProps) {
  const [isRegistering, setIsRegistering] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState("");

  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [registerUserMut] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      if (data.error) {
        setMessage("An unexpcted error has occured");
        setIsRegistering(false);
        return;
      }

      if (!data.createUser.success) {
        setMessage(data.createUser.message);
        setIsRegistering(false);
        return;
      }

      props.navigation.goBack(); // idk if this is needed
      userStore.setUserInfo(data.user);
    },
    onError: () => {
      setMessage("An unexpected error has occured");
      setIsRegistering(false);
    }
  });

  const handleRegister = () => {
    setMessage("");
    setIsRegistering(true);

    // ------ start of validation
    if ([name, surname, username, email, password, confirmPassword].includes("")) {
      setMessage("All fields are required");
      setIsRegistering(false);
      return;
    }

    if (password !== confirmPassword) {
      setMessage("The entered passwords mismatch");
      setIsRegistering(false);
      return;
    }

    if (!validator.isEmail(email)) {
      setMessage("Invalid email");
      setIsRegistering(false);
      return;
    }
    // -------- end of validation

    // bcrypt is replaced with sha256
    // bcrypt.hash(password, 10, (err, hash) => {
    //   if (err) {
    //     setMessage("Unexpected error");
    //     setIsRegistering(false);
    //     return;
    //   }

    //   const formData = {
    //     fname: name,
    //     surname,
    //     username,
    //     email,
    //     password: hash,
    //   };

    //   // graphql request
    //   registerUserMut({ variables: formData });
    // });

    const hash = sha256(password);

    const formData = {
      fname: name,
      surname,
      username,
      email,
      password: hash,
    };

    // graphql request
    registerUserMut({ variables: formData });
  };

  const handleCancel = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>REGISTER</Text>

        <LoginInput style={styles.input} onChangeText={setName}
          value={name} placeholder={"Name"} />

        <LoginInput style={styles.input} onChangeText={setSurname}
          value={surname} placeholder={"Surname"} />

        <LoginInput style={styles.input} onChangeText={setUsername}
          value={username} placeholder={"Username"} />

        <LoginInput style={styles.input} onChangeText={setEmail}
          value={email} placeholder={"Email"} />

        <LoginInput style={styles.input} onChangeText={setPassword}
          value={password} placeholder={"Password"} secureTextEntry />

        <LoginInput style={styles.input} onChangeText={setConfirmPassword}
          value={confirmPassword} placeholder={"Confirm Password"} secureTextEntry />

        {isRegistering && <ActivityIndicator size="large" color={themes.dark.lighterer} />}

        {!!message && (
          <View style={styles.message}>
            <Text style={styles.messageText}>{message}</Text>
          </View>
        )}

        <View style={styles.bottomButtons}>
          <LoginButton style={styles.button} onPress={() => handleCancel()}
            disabled={isRegistering} label={"Cancel"} invert />
          <LoginButton style={styles.button} onPress={() => handleRegister()}
            disabled={isRegistering} label={"Submit"} />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: themes.dark.backgroundDark,
  },
  contentContainer: {
    backgroundColor: themes.dark.backgroundDark,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#d3e2f5",
    fontSize: 34,
    paddingTop: "10%",
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
  },
  message: {
    width: "75%",
    minHeight: "8%",
    backgroundColor: "#94140a",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  messageText: {
    flex: 1,
    color: "white",
    padding: "5%",
  }
});
