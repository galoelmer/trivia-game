import useLoadFonts from "hooks/useLoadFonts";
import Layout from "components/layout";
import ReduceProviders from "components/reduce-providers";
import { TriviaProvider } from "context/trivia";
import { TranslateProvider } from "context/i18n";

export default function App() {
  const { fontsLoaded } = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ReduceProviders providers={[TranslateProvider, TriviaProvider]}>
      <Layout />
    </ReduceProviders>
  );
}
