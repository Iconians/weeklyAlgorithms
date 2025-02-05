const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

const countOccurrences = (arr) => {
  const map = new Map();

  for (let str of arr) {
    if (map.has(str)) {
      map.set(str, map.get(str) + 1);
    } else map.set(str, 1);
  }
  return map;
};

console.log(countOccurrences(arr));

// output
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }
