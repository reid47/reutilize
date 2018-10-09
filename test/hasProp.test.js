import hasProp from '../src/hasProp';

describe('hasProp', () => {
  it('works', () => {
    expect(hasProp('a')({})).toBe(false);
    expect(hasProp('b')({ a: 1 })).toBe(false);
    expect(hasProp('b')({ b: 1 })).toBe(true);
  });
});
