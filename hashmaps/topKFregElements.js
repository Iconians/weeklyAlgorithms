class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Helper methods to get parent, left, and right child indices
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  // Swap elements at two indices
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert a new element into the heap
  insert(element) {
    this.heap.push(element);
    this.heapifyUp();
  }

  // Remove and return the smallest element from the heap
  extractMin() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  // Heapify up to maintain the heap property
  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index][1] < this.heap[this.getParentIndex(index)][1]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  // Heapify down to maintain the heap property
  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)][1] <
          this.heap[smallerChildIndex][1]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index][1] < this.heap[smallerChildIndex][1]) {
        break;
      }
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  // Get the size of the heap
  size() {
    return this.heap.length;
  }
}

const topKFregElements = (arr, k) => {
  const map = new Map();
  const returnArr = [];

  for (let num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  const minHeap = new MinHeap();

  for (let [key, value] of map.entries()) {
    minHeap.insert([key, value]);
    if (minHeap.size() > k) {
      minHeap.extractMin();
    }
  }

  while (minHeap.size() > 0) {
    returnArr.push(minHeap.extractMin()[0]);
  }

  return returnArr.reverse();
};

console.log(topKFregElements([1, 1, 1, 2, 2, 3], 2));
console.log(topKFregElements([3, 1, 1, 1, 2, 2], 2));
