import React from "react";
import { StyleSheet, View, TextInput, TextInputProps } from "react-native";
import { getScreenHeight } from "../../utils/screen";

export default function LoginInput(props: TextInputProps) {
  const propsCopy = { ...props };
  delete propsCopy.style;

  return (
    <View style={props.style}>
      <View style={styles.container}>
        <TextInput style={styles.input} {...propsCopy} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    height: getScreenHeight() * 0.07,
    paddingHorizontal: "4%",
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: "100%",
  }
});
