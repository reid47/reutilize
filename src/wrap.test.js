import wrap from './wrap';

describe('wrap', () => {
  it('works with only a prefix given', () => {
    const wrap1 = wrap('hi');
    expect(wrap1('there')).toBe('hitherehi');
    expect(wrap1('lo')).toBe('hilohi');
  });

  it('works with both a prefix and suffix given', () => {
    const wrap1 = wrap('before', 'after');
    expect(wrap1('hey')).toBe('beforeheyafter');
    expect(wrap1('wow')).toBe('beforewowafter');
  });
});
