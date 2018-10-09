import repeat from '../src/repeat';

describe('repeat', () => {
  it('works', () => {
    expect(repeat(4)('o')).toBe('oooo');
    expect(repeat(0)('o')).toBe('');
  });
});
