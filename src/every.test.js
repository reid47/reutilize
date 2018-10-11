import every from './every';

describe('every', () => {
  it('works', () => {
    const greaterThan10 = n => n > 10;

    expect(every(greaterThan10)([])).toBe(true);
    expect(every(greaterThan10)([1, 2, 3])).toBe(false);
    expect(every(greaterThan10)([1, 2, 3, 100])).toBe(false);
    expect(every(greaterThan10)([20, 30, 100])).toBe(true);
  });
});
