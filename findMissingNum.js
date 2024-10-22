// Given an array of integers from 1 to n with one number missing, write a function
// to find the missing number.

const findMissingNum = (arr) => {
  let expectedSum = 0;
  let actualSum = 0;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    expectedSum += i;
  }

  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
};

const arr1 = [1, 2, 4, 5, 6];
const arr2 = [10, 11, 12, 14, 15, 16];
const arr3 = [100, 101, 102, 103, 105, 106, 107];

console.log(findMissingNum(arr1));
console.log(findMissingNum(arr2));
console.log(findMissingNum(arr3));
