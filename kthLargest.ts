// Find the k-th largest element in an unsorted array. Note that it is the k-th largest element in sorted order,
// not the k-th distinct element.

const kthLargest = (arr: number[], k: number): number => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr[k - 1];
};

console.log(kthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
