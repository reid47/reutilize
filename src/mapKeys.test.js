import mapKeys from './mapKeys';

describe('mapKeys', () => {
  it('works', () => {
    const upper = key => key.toUpperCase();
    const obj = { a: 2, b: 4, c: 6 };

    expect(mapKeys(upper)(obj)).toEqual({ A: 2, B: 4, C: 6 });
  });
});
