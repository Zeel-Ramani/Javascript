// Operations in Stack

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  display() {
    return this.items.join(' ');
  }
}

const stack = new Stack();  

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);


console.log(stack.pop());   

console.log(stack.display());