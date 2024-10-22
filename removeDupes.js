// Prompt: Write a function that takes a list (array) and returns a new list with all duplicate elements removed.
// Extension: Modify the function to maintain the order of the original list.

const removeDupes = (arr) => {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
    }
  }
  return [...map.keys()];
};

let arr1 = [1, 2, 3, 3, 5, 0, 4, 6, 4, 8, 9];
console.log(removeDupes(arr1)); // Expected: [1, 2, 3, 5, 0, 4, 6, 8, 9]

let arr2 = [7, 7, 7, 7, 7];
console.log(removeDupes(arr2)); // Expected: [7]

let arr3 = [10, 20, 30, 40, 50];
console.log(removeDupes(arr3)); // Expected: [10, 20, 30, 40, 50]

let arr4 = [1, "1", 2, "2", 3, "3"];
console.log(removeDupes(arr4)); // Expected: [1, "1", 2, "2", 3, "3"]

let arr5 = [];
console.log(removeDupes(arr5)); // Expected: []

let arr6 = [-1, -2, -3, -1, -4, -2, 0];
console.log(removeDupes(arr6)); // Expected: [-1, -2, -3, -4, 0]

let arr7 = [10, 20, 30, 10, 40, 50, 30, 20, 60, 70, 80, 90, 100];
console.log(removeDupes(arr7)); // Expected: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let arr8 = [0, 0, 0, 1, 2, 0, 3, 0];
console.log(removeDupes(arr8)); // Expected: [0, 1, 2, 3]

let arr9 = [42];
console.log(removeDupes(arr9)); // Expected: [42]

let arr10 = [undefined, null, undefined, null, 0];
console.log(removeDupes(arr10)); // Expected: [undefined, null, 0]
