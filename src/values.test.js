import values from './values';

describe('values', () => {
  it('works', () => {
    expect(values({})).toEqual([]);
    expect(values({ a: 1, b: 2, c: true, d: 'hi' })).toEqual([1, 2, true, 'hi']);
  });
});
