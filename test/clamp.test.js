import { clamp } from '../src/clamp';

describe('clamp', () => {
  it('works', () => {
    expect(clamp(0, 10)(47)).toBe(10);
    expect(clamp(0, 100)(47)).toBe(47);
    expect(clamp(100, 200)(47)).toBe(100);
  });
});
