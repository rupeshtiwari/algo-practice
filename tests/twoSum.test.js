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