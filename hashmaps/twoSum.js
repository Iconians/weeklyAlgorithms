const arr = [2, 7, 11, 15];

const twoSum = (arr, sum) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let num = sum - arr[i];
    if (map.has(num)) {
      return [map.get(num), i];
    }
    map.set(arr[i], i);
  }
  return [];
};

console.log(twoSum(arr, 9));
