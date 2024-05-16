# Algorithm Practice with Node.js

This repository contains solutions to common algorithm problems implemented in Node.js, along with a set of unit tests to verify their correctness. The project is set up with Jest, a JavaScript testing framework, to make testing straightforward and efficient.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rupeshtiwari/algo-practice.git
   cd algo-practice
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

### Project Structure

The project is structured as follows:

```
algo-practice/
├── node_modules/
├── src/
│   └── twoSum.js        # Algorithm implementations
├── tests/
│   └── twoSum.test.js   # Unit tests for the algorithms
├── package.json         # Project configuration and dependencies
├── package-lock.json    # Dependency tree lock file
└── README.md            # Project documentation
```

### Running Tests

To run the unit tests, use the following command:

```bash
npm test
```

This will execute all the test cases defined in the `tests` directory using Jest.

### Adding New Algorithms

1. **Create a new JavaScript file in the `src` directory:**

   ```bash
   touch src/newAlgorithm.js
   ```

2. **Implement your algorithm in the new file.**

3. **Create a corresponding test file in the `tests` directory:**

   ```bash
   touch tests/newAlgorithm.test.js
   ```

4. **Write test cases for your algorithm in the test file.**

### Example

Here is an example of an algorithm implementation and its test case.

**Algorithm Implementation (`src/twoSum.js`):**

```javascript
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  
  return [];
}

module.exports = twoSum;
```

**Test Case (`tests/twoSum.test.js`):**

```javascript
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
```

### Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes. Make sure to add corresponding test cases for any new algorithms you implement.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding!
 
