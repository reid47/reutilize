import { pipe } from '../src/pipe';

describe('pipe', () => {
  it('works with a single function', () => {
    const piped = pipe(s => s.toUpperCase());

    expect(piped('hello')).toBe('HELLO');
  });

  it('works with multiple functions', () => {
    const piped = pipe(
      s => s.toUpperCase(),
      s => s.charAt(0),
      s => s.repeat(2)
    );

    const piped2 = pipe(
      s => s.repeat(2),
      s => s.charAt(0),
      s => s.toUpperCase()
    );

    expect(piped('hello')).toBe('HH');
    expect(piped2('hello')).toBe('H');
  });
});
