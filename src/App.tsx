import Layout from "./components/layout";
import ReduceProviders from "./components/reduce-providers";
import { TriviaProvider } from "./context";
import { TranslateProvider } from "./i18n";

export default function App() {
  return (
    <ReduceProviders providers={[TranslateProvider, TriviaProvider]}>
      <Layout />
    </ReduceProviders>
  );
}
