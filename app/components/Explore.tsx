import EventScreen from "./screens/EventScreen";
import ExploreScreen from "./screens/ExploreScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import themes from "../styles/themes";
import { StatusBar } from "react-native";
import { getScreenHeight } from "../utils/screen";

const Navigator = createStackNavigator(
  {
    ExploreScreen,
    EventScreen
  },
  {
    initialRouteName: "ExploreScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: themes.dark.backgroundDark,
        marginTop: -1 * StatusBar.currentHeight, // idk why was this necessary
        height: 0.1 * getScreenHeight()
      },
      headerTintColor: "white",
      header: null
    }
  }
);

const Home = createAppContainer(Navigator);

export default Home;
