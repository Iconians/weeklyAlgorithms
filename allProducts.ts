// Given an array of integers, return an array such that each element at index i is the product of all the numbers in the
// original array except the one at i.
const allProducts = (arr: number[]): number[] => {
  let array: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    array.push(product);
  }

  return array;
};

console.log(allProducts([1, 2, 3, 4, 5]));
console.log(allProducts([1, 0, 3, 4, 5]));
console.log(allProducts([1, 0, 3, 4, 0]));
