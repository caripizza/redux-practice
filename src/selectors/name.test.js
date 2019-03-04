import { getName } from './name';

describe ('name selector', () => {
  it('gets a name', () => {
    const retrievedState = getName({ name: 'Cari Pizza' });
    expect(retrievedState).toEqual('Cari Pizza');
  });
});
