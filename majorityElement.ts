// Given an array of size n, find the majority element. The majority element is the element that appears more than n/2 times.

const majorityElement = (arr: unknown[]): unknown => {
  const count = new Map();
  let maxCount = 0;
  let maxKey = null;

  for (let item of arr) {
    if (count.has(item)) {
      count.set(item, count.get(item) + 1);
    } else {
      count.set(item, 1);
    }
  }

  count.forEach((elm, key) => {
    if (elm > maxCount) {
      maxCount = elm;
      maxKey = key;
    }
  });

  console.log(maxKey, maxCount);
  return maxKey;
};

console.log(
  majorityElement([1, 2, 5, 10, 1, 3, 7, 2, 3, 1, 5, 1, 7, 8, 10, 11, 1])
);
