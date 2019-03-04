import { createStore } from 'redux';
// import reducer from './reducers';
import indexGreetingName from './reducers/indexGreetingName';

export default createStore(
  // reducer,
  indexGreetingName,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
