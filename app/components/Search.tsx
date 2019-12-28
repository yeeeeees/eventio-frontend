import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import themes from "../styles/themes";
import { getScreenHeight } from "../utils/screen";

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="Search" maxLength={63} />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: getScreenHeight(),
    backgroundColor: themes.dark.darkerer,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchBar: {
    backgroundColor: themes.dark.dark,
    width: "100%",
    height: "10%",
    margin: 15,
    borderLeftWidth: 15,
    borderColor: "transparent",
    top: 0,
  },
  input: {
    flex: 1,
    color: themes.generic.white,
  },
});
