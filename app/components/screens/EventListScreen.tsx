import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import themes from "../../styles/themes";
import { getScreenHeight } from "../../utils/screen";
import { GeneralTypes } from "../..";
import { StackNavigationProp } from "@react-navigation/stack";
import EventListHorizontal from "../presentational/EventListHorizontal";
import ExclamationMark from "../presentational/ExclamationMark";

interface EventListProps {
  // I really dont wanna fuck with this rn
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: StackNavigationProp<any, any>;
  events: GeneralTypes.Event[];
  emptyText?: string;
}

const EventList = (props: EventListProps) => {
  if (!props.events) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={"large"} color={themes.dark.lighterer}/>
      </View>
    );
  }

  if (props.events.toString() === "") {
    return (
      <View style={styles.container}>
        <ExclamationMark style={styles.exclMark}/>
        <Text style={styles.emptyText}>{props.emptyText || "This seems to be empty"}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <EventListHorizontal
        style={styles.list}
        events={props.events}
        onEachPress={(item) =>
          // ovo mi je radilo na prvi try :))
          () => {
            props.navigation.navigate("EventScreen", {
              event: item
            });
          }
        }
      />
    </View>
  );
};

// EventList.navigationOptions = {
//   header: null
// };

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: themes.dark.backgroundDarkerer,
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
    // backgroundColor: themes.dark.backgroundDark,
  },
  title: {
    color: "white",
    padding: 20,
    paddingBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  loading: {
    flex: 1,
    height: "100%",
    backgroundColor: "transparent",
    paddingTop: "55%",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    maxWidth: "65%",
    color: themes.dark.light,
    textAlign: "center",
  },
  exclMark: {
    marginBottom: 10
  }
});

export default EventList;
