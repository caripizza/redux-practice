import { NAME_CHANGE } from '../actions/name';

export default function reducer(state = '', { type, payload }) {
  switch(type) {
    case NAME_CHANGE:
      return payload;
    default:
      return state;
  }
}
