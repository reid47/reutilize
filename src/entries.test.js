import entries from './entries';

describe('entries', () => {
  it('works', () => {
    expect(
      entries({
        a: '1',
        b: '2',
        c: 3
      })
    ).toEqual([['a', '1'], ['b', '2'], ['c', 3]]);
  });
});
