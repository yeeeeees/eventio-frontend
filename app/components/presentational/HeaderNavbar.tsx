import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface HeaderNavbarProps {
  titles: string[];
  tintActive: string;
  tintInactive: string;
  activeIndex: number;
}

export default function HeaderNavbar(props: HeaderNavbarProps) {
  return (
    <View style={styles.header}>
      {props.titles.map((title, i) => {
        // const color = props.activeIndex === i ? props.tintActive : props.tintInactive;
        const backColor = props.activeIndex === i ? props.tintActive : "transparent";

        return (
          <View style={styles.outerTitle} key={i}>
            <View>
              <Text style={[styles.title, { color: props.tintInactive }]}>{title}</Text>
              <View style={[styles.daska, { backgroundColor: backColor }]} />
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "15%",
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  outerTitle: {
    flex: 1,
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontSize: 20
  },
  daska: {
    flex: 1,
    maxHeight: 3,
    marginTop: 5,
    borderRadius: 5,
  }
});
