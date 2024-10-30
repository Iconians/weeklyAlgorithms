// Prompt: Write a function that takes an array and a number k as input and rotates the array to the right by k steps.

const rotateArr = (arr: number[], k: number) => {
  if (arr.length === 0) return arr;
  const temp: number[] = [];
  for (let i = 0; i < k; i++) {
    const popped = arr.pop();
    if (popped !== undefined) {
      temp.push(popped);
    }
  }
  return temp.reverse().concat(arr);
};

console.log(rotateArr([1, 2, 3, 4, 5, 6], 2));

// Extension: Modify the function to handle negative values of k to rotate the array to the left.

const rotateArr1 = (arr: number[], k: number) => {
  if (arr.length === 0) return arr;
  const temp: number[] = [];
  k = k % arr.length;
  if (k < 0) k += arr.length;
  for (let i = 0; i < k; i++) {
    const popped = arr.pop();
    if (popped !== undefined) {
      temp.push(popped);
    }
  }
  return temp.reverse().concat(arr);
};

console.log(rotateArr1([1, 2, 3, 4, 5, 6], -2));
console.log(rotateArr1([1, 2, 3, 4, 5, 6], 2));
