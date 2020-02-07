import React from "react";
import { StyleSheet, View, Text, StyleProp, ViewStyle } from "react-native";
import themes from "../../styles/themes";

interface ExclamationMarkProps {
  style?: StyleProp<ViewStyle>;
  tintColor?: string;
}

export default function ExclamationMark(props: ExclamationMarkProps) {
  const color = props.tintColor || themes.dark.light;

  return (
    <View style={[styles.container, props.style, { borderColor: color }]}>
      <Text style={[styles.exclMark, { color }]}>!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: "10%",
    aspectRatio: 1,
    borderRadius: 10000,
    alignItems: "center",
    justifyContent: "center"
  },
  exclMark: {
    fontSize: 22
  }
});
