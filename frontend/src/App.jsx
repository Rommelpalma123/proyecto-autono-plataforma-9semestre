import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { ServerProvider } from './context/ServerContext';
import { RouterManager } from './routes';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/clientGraphql';

export const App = () => (
  <ApolloProvider client={client}>
    <AuthProvider>
      <ServerProvider>
        <RouterManager />
      </ServerProvider>
    </AuthProvider>
  </ApolloProvider>
);
