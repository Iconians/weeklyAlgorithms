const symbols = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];
// since array of objects is 13 element the number is constant and doesn't change and due to the bounded number of times each symbol can appear in Roman numerals
// (at most 3 times), the time complexity is effectively constant.
// time Complexity O(1) constant
// for the space complexity in the worst case, the string length grows logarithmically with num because larger numbers are broken down into symbols efficiently.
// space Complexity O(log10(num)) algorithmic

const convertNumber = (num) => {
  let convertedNum = "";

  for (const { value, symbol } of symbols) {
    while (num >= value) {
      convertedNum += symbol;
      num -= value;
    }
  }
  return convertedNum;
};

// console.log(convertNumber(3749)) // returns MMMDCCXLIX
// console.log(convertNumber(58)) // returns LVIII
// console.log(convertNumber(1994)) // returns MCMXCIV

// this slightly optimizes it from the original solution by removing the for loop and the loop now tracks the index (i) instead of using nested loops.
// This avoids unnecessary iterations over symbols that don't fit into the current num.

// concatenating strings in a loop can be inefficient because strings are immutable. Using an array to accumulate symbols and joining them at the end
// can be more efficient, especially for large inputs. This would slightly optimize memory usage and the concatenation process.
// the convertedNum Accumulates symbols in an array, which avoids multiple string concatenations
// joins the array into a single string at the end, which can be more memory efficient.

//  but still these optimizations yield the original time and space complexity since it depends on the Roman numeral still scaling with the number of symbols,
//  which in turn depends logarithmically on the size of num

const convertNumber2 = (num) => {
  let convertedNum = [];
  let i = 0;

  while (num > 0) {
    const { value, symbol } = symbols[i];
    if (num >= value) {
      convertedNum.push(symbol);
      num -= value;
    } else {
      i++;
    }
  }
  return convertedNum.join("");
};

console.log(convertNumber2(3749)); // returns MMMDCCXLIX
console.log(convertNumber2(58)); // returns LVIII
console.log(convertNumber2(1994)); // returns MCMXCIV
