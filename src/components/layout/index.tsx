import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import Modal from "components/modal";
import Header from "components/header";
import Button from "components/button";
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
            <Button />
            <LanguageSelector />
          </>
        )}
        {displayTrivia && <TriviaCard />}
        {displayResults && <Modal />}
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
