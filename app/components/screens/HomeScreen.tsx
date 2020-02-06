import React from "react";
import EventListScreen from "./EventListScreen";
import themes from "../../styles/themes";
import { View, StyleSheet } from "react-native";
import { getScreenHeight } from "../../utils/screen";
import ViewPager from "@react-native-community/viewpager";
import HeaderNavbar from "../presentational/HeaderNavbar";
import { StackNavigationProp } from "@react-navigation/stack";

interface HomeScreenProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: StackNavigationProp<any, any>;
}

export default function HomeScreen(props: HomeScreenProps) {
  const [page, setPage] = React.useState(0);

  return (
    <View style={styles.container}>
      <HeaderNavbar
        titles={["Upcoming", "You host"]}
        tintActive={themes.dark.accentLight}
        tintInactive={themes.dark.textLight}
        activeIndex={page} />
      <ViewPager
        style={styles.views}
        initialPage={page}
        onPageSelected={(e) => { setPage(e.nativeEvent.position); }}>
        <EventListScreen navigation={props.navigation} key={0} />
        <EventListScreen navigation={props.navigation} key={1} />
      </ViewPager>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: getScreenHeight(),
    justifyContent: "flex-start",
    backgroundColor: themes.dark.backgroundDarkerer
  },
  views: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
  }
});
