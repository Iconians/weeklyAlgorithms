const subArrayEqualK = (arr, k) => {
  const map = new Map();
  let count = 0;
  let sum = 0;

  map.set(0, 1);

  for (let num of arr) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};

console.log(subArrayEqualK([1, 1, 1], 2));
ß;
