import { combineReducers } from 'redux';
import name from './name';
import greeting from './greeting';

export default combineReducers({
  name,
  greeting
});
