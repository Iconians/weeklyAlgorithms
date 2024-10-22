// Write a function that merges two sorted arrays into one sorted
// array without using any sorting functions.

const firstNumSortedArr = [1, 3, 5, 7, 15, 21, 32, 37, 60, 65];
const secondNumSortedArr = [2, 4, 6, 8, 16, 22, 53, 55, 70];
const firstStringsSortedArr = [
  "adam",
  "dog",
  "gerald",
  "lang",
  "nose",
  "over",
  "query",
  "wife",
];
const secondStringsSortedArr = [
  "beanie",
  "cat",
  "daughter",
  "father",
  "hand",
  "mother",
];

const mergeArrays = (arr1, arr2) => {
  let mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
};

console.log(mergeArrays(firstNumSortedArr, secondNumSortedArr));
console.log(mergeArrays(firstStringsSortedArr, secondStringsSortedArr));
