# Algorithm Cheat Sheet

## Two Sum Problem

**Problem Statement:**
- Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

**Approach:**
1. Initialize a hashmap to store the complement of each number and its index.
2. Iterate through the array:
   - Calculate the complement (`target - nums[i]`).
   - Check if the complement exists in the hashmap.
   - If found, return the indices `[map.get(complement), i]`.
   - If not, add the current number and its index to the hashmap.

**Key Points:**
- Time Complexity: O(n)
- Space Complexity: O(n)
- Ensure not to use the same element twice.

**Edge Cases:**
- Handle negative numbers.
- Check if the array length is at least 2.
- Return an error if no solution is found.
