import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Layout from './components/layout';
import { ThemeProvider } from './HOC/themeProvider';
import { lightTheme } from './theme/themes/light';

function App() {
  return (
    <ThemeProvider
      theme={lightTheme}
    >
      <BrowserRouter>
        <Route
          path='/'
          component={Layout}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
