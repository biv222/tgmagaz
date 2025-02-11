import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';

// Инициализация Telegram Mini App
window.Telegram.WebApp.ready();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WebAppProvider options={{
      smoothButtonsTransition: true,
    }}>
      <App />
    </WebAppProvider>
  </React.StrictMode>
); 