import React from "react";
import { StyleSheet, View, Image } from "react-native";
import themes from "../styles/themes";

export default function NavbarIcon(props: INavbarIconProps) {
  return (
    <View style={styles.container}>
      <Image
        source={props.picture}
        resizeMode={"center"}
        style={props.active ? styles.pictureActive : styles.picture} />
    </View>
  );
}

interface INavbarIconProps {
  picture: any; // idk this type actually is, (not File nor string)
  active: boolean;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.generic.transparent,
    alignItems: "center",
    justifyContent: "center",
  },
  picture: {
    tintColor: themes.dark.lighter,
    width: "100%",
    height: "62%",
  },
  pictureActive: {
    tintColor: "white",
    width: "100%",
    height: "62%",
  },
});
