// function increasingTriplet(nums: number[]): boolean {
//   let bool = false;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < nums[i + 1] && nums[i + 1] < nums[i + 2]) {
//       return (bool = true);
//     }
//   }
//   return bool;
// }

function increasingTriplet(nums: number[]): boolean {
  // let first = Number.MAX_SAFE_INTEGER;
  // let second = Number.MAX_SAFE_INTEGER;
  let first = 0;
  let second = 0;

  for (const num of nums) {
    if (num <= first) {
      first = num; // Update the smallest number
    } else if (num <= second) {
      second = num; // Update the second smallest number
    } else {
      return true; // Found a number larger than both first and second
    }
  }

  return false; // No triplet found
}

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
