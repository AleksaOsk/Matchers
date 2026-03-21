import sum from '../basic.js';

describe('sum', () => {
  test('should sum positive numbers', () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([10, 20, 30])).toBe(60);
  });

  test('should sum negative numbers', () => {
    expect(sum([-1, -2, -3])).toBe(-6);
  });

  test('should sum mixed numbers', () => {
    expect(sum([-5, 10, -3])).toBe(2);
  });

  test('should return 0 for empty array', () => {
    expect(sum([])).toBe(0);
  });

  test('should return same number for single element', () => {
    expect(sum([5])).toBe(5);
  });
});
