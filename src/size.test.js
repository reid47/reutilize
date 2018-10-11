import size from './size';

describe('size', () => {
  it('works', () => {
    expect(size('')).toBe(0);
    expect(size('hello')).toBe(5);
    expect(size([])).toBe(0);
    expect(size(['a', 3])).toBe(2);
    expect(size({})).toBe(0);
    expect(size({ a: 1, b: 2, c: 49 })).toBe(3);

    expect(size()).toBeUndefined();
    expect(size(47)).toBeUndefined();
    expect(size(null)).toBeUndefined();
  });
});
