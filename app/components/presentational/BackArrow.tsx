import React from "react";
import { StyleSheet, View, ViewStyle, StyleProp } from "react-native";
import themes from "../../styles/themes";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

interface BackArrowProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function BackArrow(props: BackArrowProps) {
  return (
    <View style={[styles.backBotun, props.style]}>
      <TouchableNativeFeedback style={styles.container} onPress={props.onPress} >
        <View style={[styles.crtaSmall, styles.gori]}></View>
        <View style={styles.crtaBig}></View>
        <View style={[styles.crtaSmall, styles.doli]}></View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  backBotun: {
    width: "15%",
    aspectRatio: 1,
    backgroundColor: themes.dark.backgroundDark,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  crtaBig: {
    width: 15,
    height: 2,
    backgroundColor: "white"
  },
  crtaSmall: {
    width: 11,
    height: 2,
    backgroundColor: "white"
  },
  gori: {
    transform: [
      { translateX: 1 },
      { rotateZ: "45deg" },
      { translateY: 7.5 },
    ]
  },
  doli: {
    transform: [
      { translateX: 1 },
      { rotateZ: "-45deg" },
      { translateY: -7.5 }
    ]
  },

});
