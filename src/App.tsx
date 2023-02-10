import { StyleSheet, View, StatusBar } from "react-native";

import Header from "./components/Header";
import ImageBackground from "./components/ImageBackground";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground />
      <Header />
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
