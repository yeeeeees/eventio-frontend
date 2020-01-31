import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import themes from "../../styles/themes";
import userStore from "../../stores/UserStore";
import { GeneralTypes } from "../..";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { logout } from "../../actions/UserActions";

export default function Profile() {
  const syntheticProfileInfo: GeneralTypes.User = userStore.getUser();

  return (
    <View style={styles.container}>
      <View style={styles.profileInfoArea}>
        <View style={styles.profilePictureOuter}>
          <Image source={syntheticProfileInfo.picture} style={styles.profilePictureInner} />
        </View>
        <View style={styles.profileDetails}>
          <Text style={{ fontSize: 22, color: "white" }}>{syntheticProfileInfo.username}</Text>
          <Text style={{ fontSize: 14, color: "grey" }}>{syntheticProfileInfo.email}</Text>
        </View>
      </View>
      <View style={{ paddingTop: 30 }}>
        <Text style={styles.option}>My Events</Text>
        <Text style={styles.option}>Joined Events</Text>
        <Text style={styles.option}>About Eventio</Text>
        <TouchableNativeFeedback onPress={() => { logout(); }}>
          <Text style={styles.option}>Log Out</Text>
        </TouchableNativeFeedback>
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
  option: {
    fontSize: 20,
    color: "white",
    padding: 10,
    paddingLeft: 20
  }
});
