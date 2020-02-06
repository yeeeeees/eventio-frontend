import React from "react";
import { StyleSheet, View } from "react-native";
import themes from "../../styles/themes";
import { getScreenHeight } from "../../utils/screen";
import { GeneralTypes } from "../..";
import { StackNavigationProp } from "@react-navigation/stack";
import eventStore from "../../stores/EventStore";
import EventListHorizontal from "../presentational/EventListHorizontal";

interface EventListProps {
  // I really dont wanna fuck with this rn
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: StackNavigationProp<any, any>;
}

const EventList = (props: EventListProps) => {
  const events: GeneralTypes.Event[] = eventStore.getAll() || [];

  return (
    <View style={styles.container}>
      <EventListHorizontal
        style={styles.list}
        events={events}
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
});

export default EventList;
