import compact from './compact';

describe('compact', () => {
  it('works', () => {
    expect(compact([])).toEqual([]);
    expect(compact([1, 2, 3])).toEqual([1, 2, 3]);
    expect(compact([0, 1, 2, 3])).toEqual([1, 2, 3]);
    expect(compact([false, true, false])).toEqual([true]);
    expect(compact([null, 'hi', undefined, 'wow', 47])).toEqual(['hi', 'wow', 47]);
  });
});
