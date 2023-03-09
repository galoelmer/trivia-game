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

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const CONTENTFUL_ACCESS_TOKEN =
  Constants?.manifest?.extra?.contentfulAccessToken;
const CONTENTFUL_SPACE_ID = Constants?.manifest?.extra?.contentfulSpaceId;

const client = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    new HttpLink({
      uri: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
      credentials: "same-origin",
      headers: {
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
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
