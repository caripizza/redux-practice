import { GREETING_CHANGE } from '../actions/greeting';

export default function reducer(state = 'Hello', { type, payload }) {
  switch(type) {
    case GREETING_CHANGE:
      return payload;
    default:
      return state;
  }
}
