import randomInt from './randomInt';

describe('randomInt', () => {
  it('works with min and max given', () => {
    for (let min = 10; min < 100; min++) {
      for (let max = 210; max < 300; max++) {
        const val = randomInt(min, max);
        expect(typeof val === 'number').toBeTruthy();
        expect(isFinite(val)).toBeTruthy();
        expect(Math.floor(val) === val).toBeTruthy();
        expect(val).toBeGreaterThanOrEqual(min);
        expect(val).toBeLessThanOrEqual(max);
      }
    }
  });

  it('works with only max given', () => {
    for (let max = 210; max < 300; max++) {
      const val = randomInt(max);
      expect(typeof val === 'number').toBeTruthy();
      expect(isFinite(val)).toBeTruthy();
      expect(Math.floor(val) === val).toBeTruthy();
      expect(val).toBeGreaterThanOrEqual(0);
      expect(val).toBeLessThanOrEqual(max);
    }
  });
});
