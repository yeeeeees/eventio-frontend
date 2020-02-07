import React from "react";
import { StyleSheet, View, TextInput, ActivityIndicator } from "react-native";
import themes from "../../styles/themes";
import { getScreenHeight } from "../../utils/screen";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_EVENTS } from "../../graphql/queries";
import { GeneralTypes } from "../..";
import { StackNavigationProp } from "@react-navigation/stack";

interface ExploreScreenProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: StackNavigationProp<any, any>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ExploreScreen(props: ExploreScreenProps) {
  const [searchInput, setSearchInput] = React.useState();
  // const [searching, setSearching] = React.useState();
  const [event, setEvent] = React.useState<GeneralTypes.Event>();
  const { loading, data, refetch } = useQuery(SEARCH_EVENTS, {
    variables: {
      title: searchInput
    },
    onCompleted: () => {
      setEvent(data);
    }
  });


  const handleTextChange = (text) => {
    setSearchInput(text);
    refetch();
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          onChangeText={handleTextChange}
          placeholder="Search"
          maxLength={63} />
      </View>
      {loading && (
        <ActivityIndicator size={"large"} color={themes.dark.lighterer}/>
      )}
      {/* {!loading && (
        <EventListHorizontal events={events} onEachPress={(item) =>
          () => {
            props.navigation.navigate("EventScreen", {
              event: item
            });
          }} />)
      } */}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: getScreenHeight(),
    backgroundColor: themes.dark.backgroundDarkerer,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchBar: {
    backgroundColor: themes.dark.backgroundDark,
    width: "100%",
    height: "10%",
    margin: 15,
    borderLeftWidth: 15,
    borderColor: "transparent",
    top: 0,
  },
  input: {
    flex: 1,
    color: themes.generic.white,
  },
});
