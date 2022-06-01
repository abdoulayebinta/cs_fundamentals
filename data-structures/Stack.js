const Node = require('./utils/Node');

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

/**
 * Implementation using LinkedList
 */
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  /**
   * check if stack is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * See the very top element or node
   * @returns node
   */
  peek() {
    return this.top;
  }

  /**
   * Add a node or element to the top of the stack
   * @param {Node} value - The element or node to add
   * @returns {stack}
   */
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const oldTopPointer = this.top;
      this.top = newNode;
      this.top.next = oldTopPointer;
    }
    this.length++;
    return this;
  }

  /**
   * Remove an element or node from the top of the stack
   */
  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
    return this;
  }
}

//===== Test ====
const stack = new Stack();
console.log(stack.push('google'));
console.log(stack.push('udemy'));
console.log(stack.push('discord'));
console.log('-----------------');
console.log(stack.peek());
console.log(stack.pop);
