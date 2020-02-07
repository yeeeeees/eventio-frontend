import { AppRegistry } from "react-native";
import App from "./app/App";
import { name as appName } from "./app.json";
import { registerRootComponent } from "expo";

AppRegistry.registerComponent(appName, () => App);

export default registerRootComponent(App);
