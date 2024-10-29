// You will be given an array of numbers. You have to sort the odd numbers in ascending order
// while leaving the even numbers at their original positions.

const sortArray = (arr: number[]) => {
  let sorted: number[] = [];
  let oddArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArr.push(arr[i]);
    }
    sorted.push(arr[i]);
  }

  oddArr.sort((a, b) => a - b);
  return sorted.map((num) => {
    if (num % 2 !== 0) {
      return oddArr.shift() as number;
    }
    return num;
  });
};

console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]
console.log(sortArray([])); // []
