import React from "react";
import Home from "./Home";
import Search from "./Search";
import Calendar from "./Calendar";
import Profile from "./Profile";
import NavbarItem from "./presentational/NavbarItem";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import themes from "../styles/themes";

const images = {
  home: require("../static/images/home.png"),
  search: require("../static/images/search.png"),
  calendar: require("../static/images/calendar.png"),
  profile: require("../static/images/profile.png"),
};

const Navigator = createBottomTabNavigator(
  {
    Home,
    Search,
    Calendar,
    Profile
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeBackgroundColor: themes.dark.dark,
      inactiveBackgroundColor: themes.dark.dark,
      activeTintColor: "white",
      inactiveTintColor: themes.dark.lighter,
      showLabel: false,
      style: {
        borderTopWidth: 0
      },
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const name = navigation.state.routeName.toLowerCase();
        return <NavbarItem picture={images[name]} tintColor={tintColor} />;
      },
      title: null,
    })
  }
);

const Main = createAppContainer(Navigator);

export default Main;
