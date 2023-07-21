import "dotenv/config";

export default {
  expo: {
    name: "Trivia",
    slug: "trivia-game",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#011520",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#011520",
      },
      package: "com.galoelmer.triviagame",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "a67250b1-6266-41de-b09a-2035f591b1d5",
      },
      hasuraKey: process.env.HASURA_KEY,
    },
  },
};
