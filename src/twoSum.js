// src/twoSum.js

/**
 * Function to find indices of two numbers that add up to the target.
 * @param {number[]} nums - Array of integers.
 * @param {number} target - Target sum.
 * @return {number[]} - Indices of the two numbers.
 */
function twoSum(nums, target) {
  // Check if the array has at least 2 elements
  if (nums.length < 2) {
    throw new Error('Input array must have at least two elements.');
  }

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  // If no solution is found, throw an error.
  throw new Error('No two sum solution found.');
}

module.exports = twoSum;
