import randomFloat from './randomFloat';

describe('randomFloat', () => {
  it('works with min and max given', () => {
    for (let min = 10; min < 100; min++) {
      for (let max = 210; max < 300; max++) {
        const val = randomFloat(min, max);
        expect(typeof val === 'number').toBeTruthy();
        expect(isFinite(val)).toBeTruthy();
        expect(val).toBeGreaterThanOrEqual(min);
        expect(val).toBeLessThanOrEqual(max);
      }
    }
  });

  it('works with only max given', () => {
    for (let max = 210; max < 300; max++) {
      const val = randomFloat(max);
      expect(typeof val === 'number').toBeTruthy();
      expect(isFinite(val)).toBeTruthy();
      expect(val).toBeGreaterThanOrEqual(0);
      expect(val).toBeLessThanOrEqual(max);
    }
  });
});
