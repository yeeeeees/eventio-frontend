import React from "react";
import { StyleSheet, Text, View } from "react-native";
import themes from "../styles/themes";
import NavbarIcon from "./NavbarIcon";

export default function Navbar(props: INavbarProps) {
  const pathToFolder = "../static/images/"; // this isnt the best pratice
  const pictures = [
    require(pathToFolder + "home.png"),
    require(pathToFolder + "search.png"),
    require(pathToFolder + "calendar.png"),
    require(pathToFolder + "profile.png"),
  ];

  return (
    <View style={styles.container}>
      {new Array(4).fill("").map((v, i) => (
        <NavbarIcon
          key={i}
          picture={pictures[i]}
          active={i === props.active ? true : false} />
      ))}
    </View>
  );
}

interface INavbarProps {
  active: number;
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: themes.dark.darker,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
