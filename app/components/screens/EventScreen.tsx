import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import themes from "../../styles/themes";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableHighlight } from "react-native-gesture-handler";
import { GeneralTypes } from "../..";

interface EventProps {
  // ill sort this out later
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: StackNavigationProp<any, any>;
}

export default function Event(props: EventProps) {
  const event: GeneralTypes.Event = props.navigation.getParam("event");

  return (
    <View style={styles.container}>
      <Image source={require("../../static/images/goat.png")} style={styles.image} />
      <View style={{ margin: 15 }}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.text}>{event.location}</Text>
        <Text style={styles.text}>{event.datePosted}</Text>
        <TouchableHighlight style={styles.button}>
          <Text style={{ fontSize: 16 }}>Join</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.dark.darkerer,
  },
  image: {
    width: "100%",
    height: "35%",
    marginTop: "10%"
  },
  title: {
    color: "white",
    fontSize: 30,
    marginBottom: 10
  },
  text: {
    color: "#b0b0b0",
    fontSize: 20,
    margin: 2,
  },
  button: {
    width: "70%",
    height: "33%",
    backgroundColor: "#c2ae17",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});
