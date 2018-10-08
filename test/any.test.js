import { any } from '../src/any';

describe('any', () => {
  it('works', () => {
    const greaterThan10 = n => n > 10;

    expect(any(greaterThan10)([])).toBe(false);
    expect(any(greaterThan10)([1, 2, 3])).toBe(false);
    expect(any(greaterThan10)([1, 2, 3, 100])).toBe(true);
  });
});
