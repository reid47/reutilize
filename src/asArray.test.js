import asArray from './asArray';

describe('asArray', () => {
  it('works', () => {
    expect(asArray('hello')).toEqual(['hello']);
    expect(asArray(2)).toEqual([2]);
    expect(asArray([2])).toEqual([2]);
    expect(asArray([2, 3, 4])).toEqual([2, 3, 4]);
    expect(asArray([2, [3], 4])).toEqual([2, [3], 4]);
  });
});
