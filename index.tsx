import { registerRootComponent } from "expo";
import Constants from "expo-constants";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import App from "./src/App";

// TODO: Start adding Tests
// https://github.com/callstack/react-native-testing-library or
// https://testing-library.com/docs/react-native-testing-library/intro

// TODO: Add Storage plugin for Flipper

// TODO: add server error handler
const errorLink = onError(({ graphQLErrors, networkError, response }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const HASURA_KEY = Constants?.expoConfig?.extra?.hasuraKey || "";

const client = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    new HttpLink({
      uri: `https://square-lab-58.hasura.app/v1/graphql`,
      credentials: "same-origin",
      headers: {
        "x-hasura-admin-secret": `${HASURA_KEY}`,
      },
    }),
  ]),
  cache: new InMemoryCache(),
});

const MainApp = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

registerRootComponent(MainApp);
