import countItems from './itemscounter.js';

// Write test for items counter
describe('countItems', () => {
  it('should return the number of items in an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(countItems(arr)).toBe(5);
  });
}
);
