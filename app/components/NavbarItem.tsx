import React from "react";
import { StyleSheet, View, Image } from "react-native";
import themes from "../styles/themes";

interface NavbarIconProps {
  picture: number;
  tintColor: string;
}

export default function NavbarItem(props: NavbarIconProps) {
  return (
    <View style={styles.container}>
      <Image source={props.picture} style={{
        tintColor: props.tintColor,
        height: "60%",
        aspectRatio: 1
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: themes.dark.dark,
    alignItems: "center",
    justifyContent: "center",
  }
});
