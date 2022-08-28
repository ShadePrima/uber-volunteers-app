import { StyleSheet, Text, View, Dimensions } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
