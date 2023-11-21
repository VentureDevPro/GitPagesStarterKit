import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';
import App from './App.tsx'
import { store } from './store'
import './index.css'

const container = document.getElementById('root');
// createRoot(container!) if you use TypeScript
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);