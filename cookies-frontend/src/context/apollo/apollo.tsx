"use client";

import { client } from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function ApolloContext({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
