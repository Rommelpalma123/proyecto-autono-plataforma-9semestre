import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { ServerProvider } from './context/ServerContext';
import { RouterManager } from './routes';
export const App = () => (
  <AuthProvider>
    <ServerProvider>
      <RouterManager />
    </ServerProvider>
  </AuthProvider>
);
