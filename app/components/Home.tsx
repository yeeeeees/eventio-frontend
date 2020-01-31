import EventListScreen from "./screens/EventListScreen";
import EventScreen from "./screens/EventScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import themes from "../styles/themes";
import { StatusBar } from "react-native";
import { getScreenHeight } from "../utils/screen";

const Navigator = createStackNavigator(
  {
    EventListScreen,
    EventScreen
  },
  {
    initialRouteName: "EventListScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: themes.dark.dark,
        marginTop: -1 * StatusBar.currentHeight, // idk why was this necessary
        height: 0.1 * getScreenHeight()
      },
      headerTintColor: "white"
    }
  }
);

const Home = createAppContainer(Navigator);

export default Home;
