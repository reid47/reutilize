import none from '../src/none';

describe('none', () => {
  it('works', () => {
    const greaterThan10 = n => n > 10;

    expect(none(greaterThan10)([])).toBe(true);
    expect(none(greaterThan10)([1, 2, 3])).toBe(true);
    expect(none(greaterThan10)([1, 2, 3, 100])).toBe(false);
  });
});
