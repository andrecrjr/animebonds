import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Main from './routes';
import { BrowserRouter } from 'react-router-dom';
import './style/index.scss';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  </BrowserRouter>,
  rootElement
);
