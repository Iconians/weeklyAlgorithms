// Prompt: Write a function that takes a list of numbers and 
// returns the sum of all even numbers in the list.
// Extension: Modify the function to return both the sum of even 
// numbers and the sum of odd numbers.

const numArr = [1, 23, 32, 14, 94, 38, 60, 13, 7, 9, 17, 15, 19]

const sumNumbers = (arr) => {
  let sumArr = [0, 0]
  for (let num of arr) {
    if (num % 2 === 0) {
      sumArr[0] += num
    } else {
      sumArr[1] += num
    }
  }
  return sumArr
}

console.log(sumNumbers(numArr))