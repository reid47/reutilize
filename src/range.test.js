import range from './range';

describe('range', () => {
  it('works', () => {
    expect(range(0, 3)).toEqual([0, 1, 2]);
    expect(range(0, 0)).toEqual([]);
    expect(range(0, -5)).toEqual([]);
  });
});
