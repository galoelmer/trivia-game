import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import useLoadFonts from "hooks/useLoadFonts";
import Layout from "components/layout";
import ReduceProviders from "components/reduce-providers";
import { TriviaProvider } from "context/trivia";
import { TranslateProvider } from "context/i18n";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded } = useLoadFonts();

  useEffect(() => {
    if (fontsLoaded) {
      (async () => {
        await SplashScreen.hideAsync();
      })();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ReduceProviders providers={[TranslateProvider, TriviaProvider]}>
      <Layout />
    </ReduceProviders>
  );
}
