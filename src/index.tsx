import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://cajoo-staging.hasura.app/v1/graphql`,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzZjg4MTExYS01N2Q2LTRhMzEtODY0Ni02NTcwYjA0ODg4MmEiLCJlbWFpbCI6ImVuZ2luZWVyLXRlc3RAY2Fqb28uZXUiLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiY3VzdG9tZXJfc2VydmljZSJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJjdXN0b21lcl9zZXJ2aWNlIiwieC1oYXN1cmEtdXNlci1pZCI6IjNmODgxMTFhLTU3ZDYtNGEzMS04NjQ2LTY1NzBiMDQ4ODgyYSJ9LCJpYXQiOjE2MzM4MDYzNDV9.MlrIvJvGoxaQLQN_xuLwbvvIyAiaE2j2E-bT1yn9wzc`,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
