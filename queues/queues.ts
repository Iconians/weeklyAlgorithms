import { Stack } from "../stacks/stacks";

// Implement a Queue Using Stacks:
// Implement a queue using two stacks. The operations should have an average time
// complexity of O(1) for enqueue and dequeue.
// Hint: One stack is used for enqueueing, and the other for dequeuing.
class QueueWithStacks<T> {
  private stack1: T[] = [];
  private stack2: T[] = [];

  enqueue(val: T) {
    this.stack1.push(val);
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return null;
    }

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()!);
      }
    }
    return this.stack2.pop()!;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    if (this.stack2.length === 0) {
      return this.stack1[0];
    } else {
      return this.stack2[this.stack2.length - 1];
    }
  }

  isEmpty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  printQueue() {
    console.log("stack1", this.stack1);
    console.log("stack2", this.stack2);
  }
}

// Circular Queue:
// Implement a circular queue with fixed size. It should support the following operations:
// enqueue, dequeue, peek, and isEmpty.
// Hint: Use an array and wrap around when the end of the queue is reached.
class CircularQueue<T> {
  private queue: (T | null)[];
  private front: number;
  private rear: number;
  private size: number;
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.queue = new Array(capacity).fill(null);
    this.front = -1;
    this.rear = -1;
    this.size = 0;
  }

  private isFull(): boolean {
    return this.size === this.capacity;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  enqueue(val: T): boolean {
    if (this.isFull()) {
      console.log("queue is full");
      return false;
    }

    if (this.isEmpty()) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = val;
    this.size++;
    return true;
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    const val = this.queue[this.front];
    this.queue[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size--;

    if (this.size === 0) {
      this.front = -1;
      this.rear = -1;
    }
    return val;
  }

  peek(): T | null {
    return this.isEmpty() ? null : this.queue[this.front];
  }

  printQueue() {
    console.log("Queue", this.queue);
    console.log(`Front: ${this.front}, Rear ${this.rear}, size: ${this.size}`);
  }
}

// const cq = new CircularQueue<number>(5);
// cq.enqueue(1);
// cq.enqueue(2);
// cq.enqueue(3);
// cq.enqueue(4);
// cq.enqueue(5);
// cq.printQueue();

// LinkedList Queue

class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
class Queue<T> {
  private front: Node<T> | null;
  private rear: Node<T> | null;
  private size: number;

  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(data: any) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      if (this.rear !== null) {
        this.rear.next = newNode;
      }
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removeNode = this.front;
    if (removeNode !== null) {
      this.front = this.front!.next;
      if (this.front === null) {
        this.rear = null;
      }
      this.size--;
      return removeNode.data;
    }
    return null;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front?.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    let current = this.front;
    const arr: T[] = [];
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

console.log(queue.dequeue());
queue.print();

console.log(queue.peek());
console.log(queue.getSize());
console.log(queue.isEmpty());

// Sliding Window Maximum:
// Given an array of integers and a sliding window size k, find the maximum element in
// each window.
// Hint: Use a deque (a queue) to keep track of the indices of the elements in the current
// window.

// Queue Reversal:
// Implement a function to reverse the elements of a queue without using any additional
// data structures.
// Hint: Use recursion to dequeue and enqueue elements back in reverse order.

// Level Order Traversal of a Binary Tree:
// Implement level-order traversal (breadth-first traversal) of a binary tree. The result
// should be a list of lists, where each inner list contains the nodes at the same level.
// Hint: Use a queue to explore each level of the tree.

// combined problems with stacks and queues

// Generate Binary Numbers from 1 to N:
// Write a function that generates binary numbers from 1 to N.
// Hint: Use a queue to generate numbers level by level, appending '0' and '1' to each
// binary number.

// Implement an Online Order System:
// Create a system to manage customers who arrive and leave a service area (queue).
// Implement functionality to process orders in the order they arrive, and support adding
// or removing customers dynamically.
// Hint: Use a queue to handle the order processing and allow new customers to enter or leave based on priority.
