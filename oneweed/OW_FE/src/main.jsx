import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import './index.css';

import './i18n/config.js';
import { ClerkProvider } from '@clerk/clerk-react';

const clerkPubKey = 'pk_test_bWVycnktbWFuYXRlZS0xLmNsZXJrLmFjY291bnRzLmRldiQ';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ClerkProvider publishableKey={clerkPubKey}>
        <App />/
      </ClerkProvider>
    </Provider>
  </React.StrictMode>
);
