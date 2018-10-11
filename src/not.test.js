import not from './not';

describe('not', () => {
  it('works', () => {
    const greaterThan100 = n => n > 100;
    const lessThan100 = n => n < 100;

    expect(not(greaterThan100)(47)).toBe(true);
    expect(not(not(greaterThan100))(47)).toBe(false);
    expect(not(lessThan100)(47)).toBe(false);
    expect(not(not(lessThan100))(47)).toBe(true);
  });
});
