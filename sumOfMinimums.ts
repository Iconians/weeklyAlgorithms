// function sumOfMinimums(arr: number[][]): number {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let rowMin = arr[i][0];
//     for (let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] < rowMin) {
//         rowMin = arr[i][j];
//       }
//     }
//     sum += rowMin;
//   }

//   return sum;
// }

function sumOfMinimums(arr: number[][]): number {
  return arr.reduce((sum, row) => {
    const rowMin = Math.min(...row);
    return sum + rowMin;
  }, 0);
}

console.log(
  sumOfMinimums([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ])
); // 6
console.log(
  sumOfMinimums([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ])
); // 76
