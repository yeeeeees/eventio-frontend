import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Home from "./app/components/Home";
import Navbar from "./app/components/Navbar";
import ViewPager from "@react-native-community/viewpager";
import Search from "./app/components/Search";
import Calendar from "./app/components/Calendar";
import Profile from "./app/components/Profile";
import { getScreenHeight } from "./app/utils/screen";

export default function App() {
  const [activePage, setActivePage] = React.useState(0);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" translucent={false} />

      <ViewPager
        style={styles.views}
        initialPage={activePage}
        onPageSelected={(e) => { setActivePage(e.nativeEvent.position); }}>
        <View key="1" >
          <Home />
        </View>
        <View key="2" style={{ justifyContent: "flex-start" }}>
          <Search />
        </View>
        <View key="3">
          <Calendar />
        </View>
        <View key="4">
          <Profile />
        </View>
      </ViewPager>

      <View style={{ justifyContent: "flex-end", bottom: 0 }}>
        <Navbar active={activePage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: getScreenHeight(),
    justifyContent: "flex-start",
  },
  views: {
    flex: 1,
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
