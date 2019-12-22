import React from "react";
import { StyleSheet, Text, View, FlatList, ImageBackground } from "react-native";
import themes from "../styles/themes";
import { LinearGradient } from "expo-linear-gradient";
import { getScreenHeight } from "../utils/screen";

// tslint:disable-next-line: no-var-requires
const image = require("../static/images/goat.png");

export default function Home() {
  // this will be replaced with data fetched from backend
  const syntheticEvents = [
    {
      name: "Dump Days",
      location: "FESB",
      city: "Split",
      time: "18:00",
    },
    {
      name: "Test",
      location: "ETŠS",
      city: "Split",
      time: "18:00",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={syntheticEvents}
        contentContainerStyle={{ width: "100%" }}
        renderItem={({ item }) => (
          <View style={styles.event}>
            <ImageBackground source={image} style={{ width: "100%", height: "100%" }}>
              <LinearGradient
                colors={["transparent", "black"]}
                style={{ flex: 1 }}
                start={[0, 0.5]}
                end={[0, 1]}>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
              </LinearGradient>
            </ImageBackground>
          </View>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.dark.darkerer,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  event: {
    width: "100%",
    height: getScreenHeight() * 0.32,
    padding: 10,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: themes.dark.dark,
  },
  title: {
    color: "white",
    padding: 20,
    paddingBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
});
