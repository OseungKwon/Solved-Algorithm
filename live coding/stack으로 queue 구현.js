// stack으로 queue 만들기

// 1. stack 만들기

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      const preNode = this.top;
      this.top = newNode;
      this.top.prev = preNode;
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      console.log("error");
    } else {
      const curNode = this.top;
      this.top = this.top.prev;
      this.length--;
      return curNode.data;
    }
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  push(data) {
    this.stack1.push(data);
  }
  shift() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.shift());
console.log(queue.shift());
