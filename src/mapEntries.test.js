import mapEntries from './mapEntries';

describe('mapEntries', () => {
  it('works', () => {
    const mapper = (key, val) => [key.toUpperCase(), val * 2];
    const obj = { a: 2, b: 4, c: 6 };

    expect(mapEntries(mapper)(obj)).toEqual({ A: 4, B: 8, C: 12 });
  });
});
