import {
  GREETING_CHANGE,
  changeGreeting
} from './greeting';

describe('greetingChange actions', () => {
  it('can create a greeting change action', () => {
    const action = changeGreeting('Hello there,');
    expect(action).toEqual({
      type: GREETING_CHANGE,
      payload: 'Hello there,'
    });
  });
});
