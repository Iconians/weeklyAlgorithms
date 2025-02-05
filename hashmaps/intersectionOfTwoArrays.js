const intersectionOfTwoArr = (arr1, arr2) => {
  const map = new Map();
  let max = 0;

  for (let num of arr1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (let num of arr2) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (let [key, value] of map.entries()) {
    if (value > max) {
      max = key;
    }
  }
  return [max];
};

console.log(intersectionOfTwoArr([1, 2, 2, 1], [2, 2]));
