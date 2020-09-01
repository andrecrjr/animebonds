import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Main from "./routes";
import "./style/index.scss";
import { BrowserRouter as Router } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Main />
    </Router>
  </ApolloProvider>,
  rootElement
);
