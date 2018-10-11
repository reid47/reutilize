import randomHexString from './randomHexString';

describe('randomHexString', () => {
  it('works', () => {
    for (let i = 0; i < 100; i++) {
      expect(randomHexString()).toMatch(/^#[a-f0-9]{6}$/);
    }
  });
});
