import { useFonts } from "expo-font";

import Layout from "components/layout";
import ReduceProviders from "components/reduce-providers";
import { TriviaProvider } from "context/trivia";
import { TranslateProvider } from "context/i18n";

export default function App() {
  // TODO: Move this to a separate file
  const [fontsLoaded] = useFonts({
    "Baloo-Medium": require("../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo-Regular": require("../assets/fonts/Baloo2-Regular.ttf"),
    "Baloo-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo-ExtraBold": require("../assets/fonts/Baloo2-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ReduceProviders providers={[TranslateProvider, TriviaProvider]}>
      <Layout />
    </ReduceProviders>
  );
}
