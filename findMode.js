// Prompt: Write a function that returns the mode of a an array of numbers.
// Extension: Ensure the function works for more than one mode.

const findMode = (arr) => {
  let map = new Map();
  let mode = [];
  let maxFreq = 0;
  if (!arr.length) return mode;

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  for (let [num, frequency] of map) {
    if (frequency > maxFreq) {
      maxFreq = frequency;
      mode = [num];
    } else if (frequency === maxFreq) mode.push(num);
  }

  return mode;
};

console.log(findMode([1, 2, 3, 1, 2, 3, 1, 3, 4, 5, 6, 2, 1])); // [1]
console.log(findMode([4, 4, 4, 6, 6, 6, 8, 8])); // [4, 6]
console.log(findMode([7, 7, 7, 7, 7])); // [7]
console.log(findMode([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(findMode([])); // "empty array"
console.log(findMode([1, 1, 2, 2, 3, 3, 4, 4])); // [1, 2, 3, 4]
