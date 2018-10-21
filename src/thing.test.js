import * as thing from './thing.js';

describe('Thing', () => {
  it('should export sum method', () => {
    expect(thing.sum).toBeTruthy()
  })

  describe('Thing.sum', () => {
    it('should take together two numbers and return their sum', () => {
      expect(thing.sum(2, 5)).toBe(7)
    })
  })
})