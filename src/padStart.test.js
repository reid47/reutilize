import padStart from '../src/padStart';

describe('padStart', () => {
  it('works without a character given', () => {
    const pad = padStart(8);
    expect(pad('a longer string')).toBe('a longer string');
    expect(pad('wow')).toBe('     wow');
  });
});
