import React from "react";
import Home from "./Home";
import SearchScreen from "./screens/SearchScreen";
import CalendarScreen from "./screens/CalendarScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NavbarItem from "./presentational/NavbarItem";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import themes from "../styles/themes";

const images = {
  Home: require("../static/images/home.png"),
  SearchScreen: require("../static/images/search.png"),
  CalendarScreen: require("../static/images/calendar.png"),
  ProfileScreen: require("../static/images/profile.png"),
};

const Navigator = createBottomTabNavigator(
  {
    Home,
    SearchScreen,
    CalendarScreen,
    ProfileScreen
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeBackgroundColor: themes.dark.dark,
      inactiveBackgroundColor: themes.dark.dark,
      activeTintColor: "white",
      inactiveTintColor: themes.dark.lighterer,
      showLabel: false,
      style: {
        borderTopWidth: 0
      },
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const name = navigation.state.routeName;
        return <NavbarItem picture={images[name]} tintColor={tintColor} />;
      },
      title: null,
    })
  }
);

const Main = createAppContainer(Navigator);

export default Main;
