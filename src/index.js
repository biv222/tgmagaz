import React from 'react';
import ReactDOM from 'react-dom/client';
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import App from './App';

// Инициализация Telegram Mini App
window.Telegram.WebApp.ready();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WebAppProvider options={{ 
      smoothButtonsTransition: true,
      async: true
    }}>
      <App />
    </WebAppProvider>
  </React.StrictMode>
); 