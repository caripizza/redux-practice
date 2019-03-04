import { getGreeting } from './greeting';

describe ('greeting selector', () => {
  it('gets a greeting', () => {
    const retrievedState = getGreeting({ greeting: 'Aloha' });
    expect(retrievedState).toEqual('Aloha');
  });
});
