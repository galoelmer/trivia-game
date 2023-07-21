import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  PropsWithChildren,
} from "react";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
import { Animated, StyleSheet, View } from "react-native";

import useLoadFonts from "hooks/useLoadFonts";
import { TriviaProvider } from "context/trivia";
import { TranslateProvider } from "context/i18n";

import Layout from "components/layout";
import ReduceProviders from "components/reduce-providers";

SplashScreen.preventAutoHideAsync();

function AnimatedSplashScreen({ children }: PropsWithChildren) {
  const animation = useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
      await Promise.all([useLoadFonts()]);
    } catch (e) {
      console.warn(e);
    } finally {
      setAppReady(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants.expoConfig?.splash?.backgroundColor,
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode:
                Constants.expoConfig?.splash?.imageResizeMode || "contain",
            }}
            source={require("assets/splash.png")}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}

export default function App() {
  return (
    <AnimatedSplashScreen>
      <ReduceProviders providers={[TranslateProvider, TriviaProvider]}>
        <Layout />
      </ReduceProviders>
    </AnimatedSplashScreen>
  );
}
