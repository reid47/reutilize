import stringHash from './stringHash';

describe('stringHash', () => {
  it('works', () => {
    expect(stringHash('test')).toBe(stringHash('test'));
    expect(stringHash('wow!')).toBe(stringHash('wow!'));
    expect(stringHash('test')).not.toBe(stringHash('wow!'));
  });
});
