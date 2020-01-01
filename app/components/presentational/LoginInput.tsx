import React from "react";
import { StyleSheet, View, TextInput, StyleProp, ViewStyle } from "react-native";
import { getScreenHeight } from "../../utils/screen";

interface LoginInputProps {
  style?: StyleProp<ViewStyle>;
  onChangeText: (text: string) => void;
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;

}

export default function LoginInput(props: LoginInputProps) {
  return (
    <View style={props.style}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeText}
          value={props.value}
          placeholder={props.placeholder}
          maxLength={63}
          secureTextEntry={props.secureTextEntry} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    height: getScreenHeight() * 0.07,
    backgroundColor: "white",
    paddingHorizontal: "4%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "100%",
    height: "100%",
  }
});
