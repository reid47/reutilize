import at from './at';

describe('at', () => {
  it('works', () => {
    expect(at(1)('hello')).toBe('e');
    expect(at(3)([1, 2, 3, 4, 5])).toBe(4);
    expect(
      at('c')({
        a: 'wow',
        b: true,
        c: 44,
        d: false
      })
    ).toBe(44);
  });
});
