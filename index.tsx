import { registerRootComponent } from "expo";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import App from "./src/App";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    new HttpLink({
      uri: "https://graphql.contentful.com/content/v1/spaces/lf7chirx6zkx",
      credentials: "same-origin",
      headers: {
        Authorization: "Bearer HF6btihZtSJpSjVkGWDzH4azTwlNSboZmwLTmPKyXZk",
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
