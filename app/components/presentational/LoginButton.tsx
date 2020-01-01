import React from "react";
import { StyleSheet, StyleProp, ViewStyle, Text, TouchableNativeFeedback, View } from "react-native";
import themes from "../../styles/themes";
import { getScreenHeight } from "../../utils/screen";

interface LoginButtonProps {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  label: string;
  disabled?: boolean;
  invert?: boolean;
}

export default function LoginButton(props: LoginButtonProps) {
  const background = props.invert ? styles.inverted : styles.normal;

  return (
    <View style={props.style}>
      <View style={[styles.container, background]}>
        <TouchableNativeFeedback onPress={props.onPress} disabled={props.disabled}>
          <Text style={styles.title}>{props.label.toUpperCase()}</Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    height: getScreenHeight() * 0.08,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  normal: {
    backgroundColor: themes.dark.lighter,
  },
  inverted: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: themes.dark.lighter
  },
  title: {
    color: "white",
    fontSize: 15
  }
});
