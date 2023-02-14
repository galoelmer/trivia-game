import { StyleSheet, View, StatusBar } from "react-native";

import Header from "./components/header";
import ImageBackground from "./components/image-background";

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
    backgroundColor: "#0A1E2A",
    alignItems: "center",
  },
});
