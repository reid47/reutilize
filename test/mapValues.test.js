import mapValues from '../src/mapValues';

describe('mapValues', () => {
  it('works', () => {
    const double = n => n * 2;
    const obj = { a: 2, b: 4, c: 6 };

    expect(mapValues(double)(obj)).toEqual({ a: 4, b: 8, c: 12 });
  });
});
