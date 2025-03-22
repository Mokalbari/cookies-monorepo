"use client";

import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

const client = () => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_SERVER_URL,
    fetchOptions: { cache: "no-store" },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
};

export function ApolloContext({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={client}>
      {children}
    </ApolloNextAppProvider>
  );
}
