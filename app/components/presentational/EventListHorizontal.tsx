import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground
} from "react-native";
import { GeneralTypes } from "../..";
import { LinearGradient } from "expo-linear-gradient";
import { getScreenHeight } from "../../utils/screen";

interface EventListHorizontalProps {
  style?: StyleProp<ViewStyle>;
  events: GeneralTypes.Event[];
  onEachPress: (item: GeneralTypes.Event) => () => void;
}

export default function EventListHorizontal(props: EventListHorizontalProps) {
  return (
    <View style={props.style}>
      <FlatList
        style={styles.list}
        data={props.events || []}
        contentContainerStyle={{ width: "100%", borderRadius: 10 }}
        keyExtractor={(item) => item.uuid.toString()}
        renderItem={({ item }) => (
          <View style={styles.event}>
            <ImageBackground source={require("../../static/images/goat.png")} style={{ width: "100%", height: "100%" }}>
              <TouchableWithoutFeedback onPress={props.onEachPress(item)}>
                <LinearGradient
                  colors={["transparent", "black"]}
                  style={{ flex: 1 }}
                  start={[0, 0.5]}
                  end={[0, 1]}>
                  <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </LinearGradient>
              </TouchableWithoutFeedback>
            </ImageBackground>
          </View>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
  },
  event: {
    width: "100%",
    height: getScreenHeight() * 0.32,
    padding: 10,
    paddingBottom: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    padding: 20,
    paddingBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
});
