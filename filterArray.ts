// Prompt: Write a function filterArray that takes an array and a callback function as input. The function should return a
// new array containing only the elements that satisfy the condition defined in the callback function.
const filterArray = (arr: any[], callback: (num: any) => boolean) => {
  const temp: any[] = [];
  for (let el of arr) {
    if (callback(el)) {
      temp.push(el);
    }
  }
  return temp;
};

const array = [1, 2, 3, 4, 5, 6];

console.log(filterArray(array, (num) => num * num === 4)); // [ 2 ]
console.log(filterArray(array, (num) => num % 2 === 0)); // [2, 4, 6]

// Extension: Modify the filterArray function to accept an additional argument that specifies the starting index from which to
// begin filtering the array.

const filterArray1 = (
  arr: any[],
  callback: (num: any) => boolean,
  index: number
) => {
  const temp: any[] = [];
  for (let i = index; i < arr.length; i++) {
    if (callback(arr[i])) {
      temp.push(arr[i]);
    }
  }
  return temp;
};

const array1 = [1, 2, 3, 4, 5, 6];

console.log(filterArray1(array1, (num) => num * num === 4, 0)); // [ 2 ]
console.log(filterArray1(array1, (num) => num % 2 === 0, 2)); // [4, 6]
