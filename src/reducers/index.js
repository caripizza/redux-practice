import {
  UPDATE_INPUT1,
  UPDATE_INPUT2
} from '../actions/inputs';

const initialState = {
  input1: 'default 1',
  input2: 'default 2'
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
    default:
      return state;
  }
}
