// Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/

class MyStack {
  constructor() {
    this.items = [];
  }

  push(x) {
    this.items.push(x);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.size() - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    console.log(this.items);
  }
}

class MyQueue {
  constructor() {}
}

// ==== Test ==
const myStack = new MyStack();
myStack.push('google');
myStack.push('facebook');
myStack.push('amazon');
console.log(myStack.peek());
myStack.printStack();
myStack.pop();
myStack.printStack();
