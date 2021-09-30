import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import "./index.css";

import { AppShell } from './app-shell';
import { NotFound } from 'pages/not-found';
import { Repositories } from './pages/repositories';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60000 }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={ queryClient }>
        <AppShell>
          <Switch>
            <Route path='/' exact component={ Repositories } />
            <Route path='*' component={ NotFound } />
          </Switch>
        </AppShell>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

