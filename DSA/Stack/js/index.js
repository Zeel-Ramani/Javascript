// Operations in Stack

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.items.pop();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   clear() {
//     this.items = [];
//   }

//   display() {
//     return this.items.join(' ');
//   }
// }

// const stack = new Stack();  

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);


// console.log(stack.pop());   

// console.log(stack.display());


// Queue operations

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.items.shift();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   clear() {
//     this.items = [];
//   }

//   display() {
//     return this.items.join(' ');
//   }
// }

// let queue = new Queue();

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);

// console.log(queue.dequeue());
// console.log(queue.display());


// Stack using two queues

// class StackUsingQueues {
//   constructor() {
//     this.queue1 = [];
//     this.queue2 = [];
//   }

//   push(element) {
//     this.queue1.push(element);
//   }

//   pop() {
//     if (this.queue1.length === 0) {
//       return null;
//     }
    
//     while (this.queue1.length > 1) {
//       this.queue2.push(this.queue1.shift());
//     }
    
//     let poppedElement = this.queue1.shift();
    
//     [this.queue1, this.queue2] = [this.queue2, this.queue1];
    
//     return poppedElement;
//   }

//   isEmpty() {
//     return this.queue1.length === 0;
//   }

//   clear() {
//     this.queue1 = [];
//     this.queue2 = [];
//   }

//   display() {
//     return this.queue1.join(' ');
//   }
// }

// let stackUsingQueues = new StackUsingQueues();

// stackUsingQueues.push(10);
// stackUsingQueues.push(20);  
// stackUsingQueues.push(30);
// stackUsingQueues.push(40);
// stackUsingQueues.push(50);

// console.log(stackUsingQueues.pop());
// console.log(stackUsingQueues.display());


// queues using two stack

// class QueueUsingStacks {
//   constructor() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }

//   enqueue(element) {
//     this.stack1.push(element);
//   }

//   dequeue() {
//     if (this.stack1.length === 0) {
//       return null;
//     }
    
//     while (this.stack1.length > 1) {
//       this.stack2.push(this.stack1.pop());
//     }
    
//     let dequeuedElement = this.stack1.pop();
  
//     while (this.stack2.length > 0) {
//       this.stack1.push(this.stack2.pop());
//     }
//     return dequeuedElement;

//   }
  
//   isEmpty() {
//     return this.stack1.length === 0;
//   }

//   clear() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }

//   display() {
//     return this.stack1.join(' '); 
//   }
//   }

//   let queueUsingStacks = new QueueUsingStacks();

//   queueUsingStacks.enqueue(10);
//   queueUsingStacks.enqueue(20);
//   queueUsingStacks.enqueue(30);
//   queueUsingStacks.enqueue(40);
//   queueUsingStacks.enqueue(50);

//   console.log(queueUsingStacks.dequeue());
//   console.log(queueUsingStacks.display());