/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
        // [1, 2, 3, -1    npx jest ./tests/findLargestElement.js]
        let biggestElement = numbers[0]; // Use 'numbers' instead of 'number'
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > biggestElement) {
                biggestElement = numbers[i];
            }
        }
        return biggestElement;
    }
    

module.exports = findLargestElement;