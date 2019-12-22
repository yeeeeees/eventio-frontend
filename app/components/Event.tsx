import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Event() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>asd</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
