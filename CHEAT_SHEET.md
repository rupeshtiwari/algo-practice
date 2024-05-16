# Algorithm Cheat Sheet

## Two Sum Problem

**Problem Statement:**
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

**Approach:**
1. Use a hashmap (dictionary) to store the complement of each number and its index.
2. Iterate through the array:
   - For each element, calculate the complement (`target - nums[i]`).
   - Check if the complement exists in the hashmap.
   - If it does, return the indices.
   - If it doesn’t, add the current element and its index to the hashmap.

**Key Points:**
- Time Complexity: O(n)
- Space Complexity: O(n)
- Do not use the same element twice.

**Edge Cases:**
- Handle negative numbers.
- Minimum array length is 2.
