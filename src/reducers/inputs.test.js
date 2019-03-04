import reducer from './inputs';
import { UPDATE_INPUT1, UPDATE_INPUT2 } from '../actions/inputs';

describe('inputsUpdate reducer', () => {
  it('handles the update input1 action', () => {
    const state = {
      input1: '',
      input2: ''
    };
    const updatedState = reducer(state, {
      type: UPDATE_INPUT1,
      payload: 'testing testing 123'
    });
    expect(updatedState).toEqual({
      input1: 'testing testing 123',
      input2: ''
    });
  });

  it('handles the update input2 action', () => {
    const state = {
      input1: '',
      input2: ''
    };
    const updatedState = reducer(state, {
      type: UPDATE_INPUT2,
      payload: 'hi ho hi ho'
    });
    expect(updatedState).toEqual({
      input1: '',
      input2: 'hi ho hi ho'
    });
  });
});
