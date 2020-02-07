import React from "react";
import EventListScreen from "./EventListScreen";
import themes from "../../styles/themes";
import { View, StyleSheet } from "react-native";
import { getScreenHeight } from "../../utils/screen";
import ViewPager from "@react-native-community/viewpager";
import HeaderNavbar from "../presentational/HeaderNavbar";
import { StackNavigationProp } from "@react-navigation/stack";
import { setFavorite, setHosted } from "../../actions/EventActions";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER_EVENTS } from "../../graphql/queries";
import userStore from "../../stores/UserStore";
import eventStore from "../../stores/EventStore";
import { GeneralTypes } from "../..";

interface HomeScreenProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: StackNavigationProp<any, any>;
}

export default function HomeScreen(props: HomeScreenProps) {
  const [page, setPage] = React.useState(0);
  const [fav, setFav] = React.useState<GeneralTypes.Event[]>(eventStore.getFavorite());
  const [host, setHost] = React.useState<GeneralTypes.Event[]>(eventStore.getHosted());

  const { data } = useQuery(GET_USER_EVENTS, {
    variables: {
      username: userStore.getUser().username
    },
    onCompleted: () => {
      const { user } = data;
      const favorite = user.joinedEvents.edges;
      const hosted = user.createdEvents.edges;
      setFavorite(favorite);
      setHosted(hosted);
      // these lines two below are required because, for some reason, useEffect
      // activates a few rerenders late
      setFav(favorite);
      setHost(hosted);
    }
  });

  React.useEffect(() => {
    const handleFavoriteChange = () => {
      const favorite = eventStore.getFavorite();
      setFav(favorite);
    };

    const handleHostedChange = () => {
      const hosted = eventStore.getHosted();
      setHost(hosted);
    };

    eventStore.on("favoriteEventChange", handleFavoriteChange);
    eventStore.on("hostedEventChange", handleHostedChange);

    return () => {
      eventStore.off("favoriteEventChange", handleFavoriteChange);
      eventStore.off("hostedEventChange", handleHostedChange);
    };
  }, []);

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
        <EventListScreen
          events={fav}
          emptyText={"No joined upcoming events yet"}
          navigation={props.navigation}
          key={0} />
        <EventListScreen
          events={host}
          emptyText={"You don't host any upcoming events"}
          navigation={props.navigation}
          key={1} />
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
