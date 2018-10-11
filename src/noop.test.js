import noop from './noop';

describe('noop', () => {
  it("doesn't do anything :)", () => {
    expect(noop()).toBeUndefined();
    expect(noop(47)).toBeUndefined();
  });
});
