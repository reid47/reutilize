import lines from './lines';

describe('lines', () => {
  it('works', () => {
    expect(lines('a\nb')).toEqual(['a', 'b']);
    expect(lines('a\r\nb')).toEqual(['a', 'b']);
    expect(lines('a\rb')).toEqual(['a', 'b']);
    expect(
      lines(`
      a
      b
      cdef
    `)
    ).toEqual(['', '      a', '      b', '      cdef', '    ']);
  });
});
