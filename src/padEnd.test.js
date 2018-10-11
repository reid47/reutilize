import padEnd from './padEnd';

describe('padEnd', () => {
  it('works without a character given', () => {
    const pad = padEnd(8);
    expect(pad('a longer string')).toBe('a longer string');
    expect(pad('wow')).toBe('wow     ');
  });

  it('works with a character given', () => {
    const pad = padEnd(8, '-');
    expect(pad('a longer string')).toBe('a longer string');
    expect(pad('wow')).toBe('wow-----');
  });
});
