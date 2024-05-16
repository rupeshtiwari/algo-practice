// tests/twoSum.test.js

const twoSum = require('../src/twoSum');

test('Example 1: [2, 7, 11, 15] with target 9', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('Example 2: [3, 2, 4] with target 6', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test('Example 3: [3, 3] with target 6', () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

// Edge case: negative numbers
test('Edge Case: [-3, 4, 3, 90] with target 0', () => {
  expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
});

// Edge case: minimum length array
test('Edge Case: minimum length array', () => {
  expect(() => {
    twoSum([1], 2);
  }).toThrow('Input array must have at least two elements.');
});

// Edge case: no solution found
test('Edge Case: no solution', () => {
  expect(() => {
    twoSum([1, 2, 3], 7);
  }).toThrow('No two sum solution found.');
});
