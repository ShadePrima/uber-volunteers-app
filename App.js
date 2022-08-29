import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import RootNavigator from "./src/navigations/RootNavigator";

export default function App() {
  return <RootNavigator />;
}

const styles = StyleSheet.create({
  container: {},
});
