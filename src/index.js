import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './store';
// import 'normalize.css';

const rootEl = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
