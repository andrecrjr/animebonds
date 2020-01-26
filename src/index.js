import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import Main from "./components/App";
import { ApolloProvider } from "@apollo/react-hooks";
import "./style/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

export const history = createBrowserHistory();

const client = new ApolloClient({
  uri: "https://graphql.anilist.co"
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <Main />
    </Router>
  </ApolloProvider>,
  rootElement
);
