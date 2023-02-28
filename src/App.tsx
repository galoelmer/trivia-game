import Layout from "./components/layout";
import { TriviaProvider } from "./context";
import { TranslateProvider } from "./i18n";

export default function App() {
  return (
    <TranslateProvider>
      <TriviaProvider>
        <Layout />
      </TriviaProvider>
    </TranslateProvider>
  );
}
