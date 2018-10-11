import get from './get';

describe('get', () => {
  it('works', () => {
    expect(get('a')({ a: 47 })).toBe(47);
    expect(get('a', 'b')({ a: { b: 47 } })).toBe(47);
    expect(get('a', 'c')({ a: { b: 47 } })).toBeUndefined();
  });
});
