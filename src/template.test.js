import template from '../src/template';

describe('template', () => {
  it('works', () => {
    const tpl = template`hello world!`;
    expect(tpl('anything')).toBe('hello world!');

    const tpl2 = template`hello ${a => a.name}!`;
    expect(tpl2({ name: 'reid' })).toBe('hello reid!');

    const someOtherVariable = 47;
    const tpl3 = template`A: ${someOtherVariable}, B: ${a => a[0]}, C: ${a => a[1]}`;
    expect(tpl3([48, 49])).toBe('A: 47, B: 48, C: 49');
  });
});
