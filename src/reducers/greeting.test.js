import reducer from './greeting';
import { GREETING_CHANGE } from '../actions/greeting';

describe ('greeting reducer', () => {
  it('returns an initial state', () => {
    const updatedState = reducer('Hello', {});
    expect(updatedState).toEqual('Hello');
  });

  it('updates state with new greeting', () => {
    const updatedState = reducer('Hello', {
      type: GREETING_CHANGE,
      payload: 'Hi there,'
    });
    expect(updatedState).toEqual('Hi there,');
  });
});
