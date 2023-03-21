import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import ModalResults from "components/modal-results";
import Header from "components/app-header";
import StartButton from "components/start-trivia-button";
import TriviaCard from "components/trivia-card";
import ImageBackground from "components/image-background";
import LanguageSelector from "components/language-selector";

import { useTriviaContext } from "context/trivia";

const Layout = () => {
  const { displayTrivia, displayResults } = useTriviaContext();

  return (
    <View style={styles.container}>
      <ImageBackground>
        <Header />
        {!displayTrivia && !displayResults && (
          <>
            <StartButton />
            <LanguageSelector />
          </>
        )}
        {displayTrivia && <TriviaCard />}
        {displayResults && <ModalResults />}
      </ImageBackground>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1E2A",
  },
});
