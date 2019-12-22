import React from "react";
import { StyleSheet, Text,  View, TextInput } from "react-native";
import themes from "../styles/themes";

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
    flex: 1,
    width: "100%",
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
