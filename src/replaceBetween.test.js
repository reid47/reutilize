import replaceBetween from './replaceBetween';

describe('replaceBetween', () => {
  it('works when it finds a match', () => {
    expect(replaceBetween('<< ', ' >>', 'HERE')('hello << here >> world')).toBe('hello HERE world');
  });

  it('returns original string when start pattern not found', () => {
    expect(replaceBetween('??', ' >>', 'HERE')('hello << here >> world')).toBe(
      'hello << here >> world'
    );
  });

  it('returns original string when end pattern not found', () => {
    expect(replaceBetween('<<', '???', 'HERE')('hello << here >> world')).toBe(
      'hello << here >> world'
    );
  });
});
