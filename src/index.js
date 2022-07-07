import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './slices'

const container = document.getElementById('root');
const root = createRoot(container);
const store = configureStore({ reducer: rootReducer })

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);