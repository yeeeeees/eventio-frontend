import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import themes from "../../styles/themes";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableHighlight } from "react-native-gesture-handler";
import { GeneralTypes } from "../..";
import { getScreenHeight } from "../../utils/screen";
import BackArrow from "../presentational/BackArrow";
import { LinearGradient } from "expo-linear-gradient";

interface EventProps {
  // ill sort this out later
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: StackNavigationProp<any, any>;
}

export default function Event(props: EventProps) {
  const event: GeneralTypes.Event = props.navigation.getParam("event");

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../static/images/goat.png")} style={styles.image}>
        <LinearGradient
          colors={["transparent", "black"]}
          style={{ height: "100%" }}
          start={[0, 0.3]}
          end={[0, 0.9]}>
          <BackArrow style={styles.arrow} onPress={props.navigation.goBack} />
          <Text style={styles.title}>{event.title}</Text>
        </LinearGradient>
      </ImageBackground>
      <View style={{ margin: 15 }}>
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
    backgroundColor: themes.dark.backgroundDarkerer,
  },
  image: {
    width: "100%",
    height: getScreenHeight() * 0.4,
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: "auto",
    marginBottom: 30,
    alignSelf: "center"
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
  },
  arrow: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "transparent"
  }
});
