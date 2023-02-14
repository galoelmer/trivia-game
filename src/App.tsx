import { StyleSheet, View, StatusBar } from "react-native";

import Header from "./components/header";
import ImageBackground from "./components/image-background";
import { TriviaCard } from "./components/trivia-card";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground />
      <Header />
      <TriviaCard />
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1E2A",
    justifyContent: "center",
  },
});
