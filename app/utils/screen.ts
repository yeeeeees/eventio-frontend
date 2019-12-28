import { Dimensions, StatusBar } from "react-native";

export function getScreenHeight() {
  // 360 x 574
  const { height } = Dimensions.get("window");
  return height - StatusBar.currentHeight;
}
