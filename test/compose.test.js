import compose from '../src/compose';

describe('compose', () => {
  it('works with a single function', () => {
    const composed = compose(s => s.toUpperCase());

    expect(composed('hello')).toBe('HELLO');
  });

  it('works with multiple functions', () => {
    const composed = compose(
      s => s.toUpperCase(),
      s => s.charAt(0),
      s => s.repeat(2)
    );

    const composed2 = compose(
      s => s.repeat(2),
      s => s.charAt(0),
      s => s.toUpperCase()
    );

    expect(composed('hello')).toBe('H');
    expect(composed2('hello')).toBe('HH');
  });
});
