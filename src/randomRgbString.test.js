import randomRgbString from './randomRgbString';

describe('randomRgbString', () => {
  it('works', () => {
    for (let i = 0; i < 100; i++) {
      expect(randomRgbString()).toMatch(/^rgb\([0-9]+, [0-9]+, [0-9]+\)$/);
    }
  });
});
