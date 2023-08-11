import countItems from './itemscounter.js';
describe('countItems', () => {
    test('should return the number of items in an array', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(countItems(arr)).toBe(5);
    });

    test('should return the number of items in an array', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        expect(countItems(arr)).toBe(6);
    });
});