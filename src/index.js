import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    text: '',
    green: '#00ff00',
    red: '#ff0000',
    bgColorStatus: '#c9c1c176',
    bgColorTransaction: '#b7b7b7',
    bgColorTransactionHistory: '#8d8dc2',
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
