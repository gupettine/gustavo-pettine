import React from 'react';
import ReactDOM from 'react-dom/client';
import { CustomThemeProvider } from './hooks/ThemeContext';
import GlobalStyles from './styles/global';
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <GlobalStyles />
      <Routes />
    </CustomThemeProvider>
  </React.StrictMode>
);