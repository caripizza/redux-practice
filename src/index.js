import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';
// import MainApp from './components/MainApp';
import GreetingApp from './components/GreetingApp';

const rootEl = document.getElementById('root');

render(
  <Provider store={store}>
    {/* <MainApp /> */}
    <GreetingApp/>
  </Provider>,
  rootEl
);
