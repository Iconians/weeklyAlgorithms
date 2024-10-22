// Write a function that takes an array of integers and a target integer.
// The function should return indices of the two numbers that add up to the target. Solve this in O(n) or better.

const twoSums = (arr, target) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const targetDiff = target - arr[i];

    if (map.has(targetDiff)) return [map.get(targetDiff), i];

    map.set(arr[i], i);
  }
  return null;
};

console.log(twoSums([2, 7, 11, 15], 9)); // Expected output: [0, 1]
console.log(twoSums([3, 2, 4], 6)); // Expected output: [1, 2]
console.log(twoSums([3, 3], 6)); // Expected output: [0, 1]
console.log(twoSums([], 4));
