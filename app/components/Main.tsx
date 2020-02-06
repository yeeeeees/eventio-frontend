import React from "react";
import Home from "./Home";
import ExploreScreen from "./screens/ExploreScreen";
import CalendarScreen from "./screens/CalendarScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NavbarItem from "./presentational/NavbarItem";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import themes from "../styles/themes";

const images = {
  Home: require("../static/images/home.png"),
  Explore: require("../static/images/search.png"),
  Calendar: require("../static/images/calendar.png"),
  Profile: require("../static/images/profile.png"),
};

const Navigator = createBottomTabNavigator(
  {
    Home,
    Explore: ExploreScreen,
    Calendar: CalendarScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeBackgroundColor: themes.dark.backgroundDarkerer,
      inactiveBackgroundColor: themes.dark.backgroundDarkerer,
      activeTintColor: "white",
      inactiveTintColor: themes.dark.lighterer,
      showLabel: true,
      style: {
        borderTopColor: themes.dark.backgroundDarker,
        borderTopWidth: 2
      },
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const name = navigation.state.routeName;
        return <NavbarItem picture={images[name]} tintColor={tintColor} />;
      },
    })
  }
);

const Main = createAppContainer(Navigator);

export default Main;
