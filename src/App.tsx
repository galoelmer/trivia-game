import { useCallback, useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Button from "./components/button";

import Header from "./components/header";
import ImageBackground from "./components/image-background";
import { TriviaCard } from "./components/trivia-card";

export default function App() {
  const [displayTrivia, setDisplayTrivia] = useState(false);

  const handleButtonPress = useCallback(
    () => setDisplayTrivia(!displayTrivia),
    []
  );

  return (
    <View style={styles.container}>
      <ImageBackground />
      <Header />
      {!displayTrivia && <Button onPress={handleButtonPress} />}
      {displayTrivia && <TriviaCard />}
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1E2A",
  },
});
