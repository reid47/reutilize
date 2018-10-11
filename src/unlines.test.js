import unlines from './unlines';

describe('unlines', () => {
  it('works', () => {
    expect(unlines(['test'])).toBe('test');
    expect(unlines(['a', 'b', 'wow'])).toBe('a\nb\nwow');
  });
});
