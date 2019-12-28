import React from "react";
import { StyleSheet, Text, View, FlatList, ImageBackground, TouchableWithoutFeedback } from "react-native";
import themes from "../styles/themes";
import { LinearGradient } from "expo-linear-gradient";
import { getScreenHeight } from "../utils/screen";
import { AppTypes } from "..";
import { StackNavigationProp } from "@react-navigation/stack";
import eventStore from "../stores/EventStore";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require("../static/images/goat.png");

interface EventListProps {
  // I really dont wanna fuck with this rn
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: StackNavigationProp<any, any>;
  events: AppTypes.Event[];
  onSelectedEvent: (event: AppTypes.Event) => void;
}

const EventList = (props: EventListProps) => {
  const events: AppTypes.Event[] = eventStore.getAll() || [];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={events}
        contentContainerStyle={{ width: "100%" }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.event}>
            <ImageBackground source={image} style={{ width: "100%", height: "100%" }}>
              <TouchableWithoutFeedback onPress={() => {
                props.navigation.navigate("Event", {
                  event: item
                });
              }}>
                <LinearGradient
                  colors={["transparent", "black"]}
                  style={{ flex: 1 }}
                  start={[0, 0.5]}
                  end={[0, 1]}>
                  <View style={{ flex: 1, justifyContent: "flex-end" }} >
                    <Text style={styles.title}>{item.name}</Text>
                  </View>
                </LinearGradient>
              </TouchableWithoutFeedback>
            </ImageBackground>
          </View>
        )} />
    </View>
  );
};

EventList.navigationOptions = {
  header: null
};

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

export default EventList;
