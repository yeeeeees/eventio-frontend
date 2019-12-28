import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import themes from "../styles/themes";
import userStore from "../stores/UserStore";
import { AppTypes } from "..";

export default function Profile() {
  // will be pulled from Flux store once it will have been set up
  const syntheticProfileInfo: AppTypes.User = userStore.getUser();

  return (
    <View style={styles.container}>
      <View style={styles.profileInfoArea}>
        <View style={styles.profilePictureOuter}>
          <Image source={syntheticProfileInfo.picture} style={styles.profilePictureInner} />
        </View>
        <View style={styles.profileDetails}>
          <Text style={{ fontSize: 22, color: "white" }}>{syntheticProfileInfo.name}</Text>
          <Text style={{ fontSize: 14, color: "grey" }}>{syntheticProfileInfo.mail}</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 20, color: "white", padding: 10 }}>My Events</Text>
        <Text style={{ fontSize: 20, color: "white", padding: 10 }}>Joined Events</Text>
        <Text style={{ fontSize: 20, color: "white", padding: 10 }}>About Eventio</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.dark.darkerer,
  },
  profileInfoArea: {
    width: "100%",
    height: "30%",
    backgroundColor: themes.dark.dark,
    flexDirection: "row",
  },
  profilePictureOuter: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  profilePictureInner: {
    height: "65%",
    aspectRatio: 1,
    borderRadius: 1000, // gotta find a better solution for this :p
  },
  profileDetails: {
    flex: 6,
    justifyContent: "center",
  },
});
