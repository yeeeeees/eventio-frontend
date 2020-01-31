import React from "react";
import { StyleSheet, View } from "react-native";
import { CalendarList } from "react-native-calendars";
import themes from "../../styles/themes";

export default function CalendarMenu() {
  return (
    <View style={styles.container}>
      <CalendarList
        horizontal
        pagingEnabled
        firstDay={1}
        theme={calendarTheme}
        style={styles.calender} />
    </View>
  );
}

const calendarTheme = {
  calendarBackground: themes.dark.dark,
  dayTextColor: "white",
  monthTextColor: "white"
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  calender: {
    backgroundColor: themes.dark.darkerer,
  }
});
