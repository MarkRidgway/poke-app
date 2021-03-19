import React from 'react';
import { ThemeProvider } from 'theme-ui';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';

import { PokemonPage } from './pages';
import { PokemonWithReactQuery } from './pages';

import { theme } from './theme/theme';

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ul>
            <li><Link to="/pokemon/25">Pikachu</Link></li>
            <li><Link to="/pokemon/150">Mewtwo</Link></li>
          </ul>
          <Switch>
            <Route path="/chinpokomon/:id">
              <PokemonPage />
            </Route>
            <Route path="/pokemon/:id">
              <PokemonWithReactQuery />
            </Route>
          </Switch>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
