import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import Header from "../header";
import Button from "../button";
import Modal from "../modal";
import ImageBackground from "../image-background";
import { TriviaCard } from "../trivia-card";

import { useTriviaContext } from "../../context";

const Layout = () => {
  const { displayTrivia, displayResults } = useTriviaContext();

  return (
    <View style={styles.container}>
      <ImageBackground>
        <Header />
        {!displayTrivia && !displayResults && <Button />}
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
