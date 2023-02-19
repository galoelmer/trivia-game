import Layout from "./components/layout";
import { TriviaProvider } from "./context";

export default function App() {
  return (
    <TriviaProvider>
      <Layout />
    </TriviaProvider>
  );
}
