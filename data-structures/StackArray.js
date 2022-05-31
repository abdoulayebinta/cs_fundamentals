/**
 * Implementation of a Stack using array
 */
class Stack {
  constructor() {
    this.items = [];
  }

  pop() {
    this.items.pop();
    return this.
  }

  push(value) {
    this.items.push(value);
    return this;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// ===== Test ======
const stack = new Stack();
stack.push('google');
stack.push('amazon');
stack.push('facebook');
//stack.pop();
console.log(stack);
//stack.pop();
//console.log(stack);
