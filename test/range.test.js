import { range } from '../src/range';

describe('range', () => {
  it('works', () => {
    expect(range(0, 3)).toEqual([0, 1, 2]);
  });
});
