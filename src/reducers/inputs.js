import {
  UPDATE_INPUT1,
  UPDATE_INPUT2
} from '../actions/inputs';
import { NOTE_CREATE } from '../actions/notes';

const initialState = {
  input1: '',
  input2: ''
};

export default function reducer(
  state = initialState,
  { type, payload }
) {
  switch(type) {
    case UPDATE_INPUT1:
      return {
        ...state,
        input1: payload
      };
    case UPDATE_INPUT2:
      return {
        ...state,
        input2: payload
      };
    case NOTE_CREATE:
      return initialState;
    default:
      return state;
  }
}
