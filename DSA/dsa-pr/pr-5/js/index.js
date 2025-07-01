// 1. Write a program for Simple Queue.

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   Push(element) {
//     this.items.push(element);
//   }

//   Pop() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.items.shift();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   display() {
//     return this.items.join(' ');
//   }
// }

// let queue = new Queue();

// queue.Push(10);
// queue.Push(20);
// queue.Push(30);
// queue.Push(40);

// queue.Pop();

// console.log(queue.display());

// output = 20 30 40


// 2. write a program Queue using two stacks.

// class QueueUsingStacks {
//   constructor() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }

//   Push(element) {
//     this.stack1.push(element);
//   }

//   Pop() {
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

//   queueUsingStacks.Push(10);
//   queueUsingStacks.Push(20);
//   queueUsingStacks.Push(30);
//   queueUsingStacks.Push(40);
//   queueUsingStacks.Push(50);

//   queueUsingStacks.Pop();

//   console.log(queueUsingStacks.display());

// output = 20 30 40 50


// 3. write a program check first string swap can make strings equal.

// function swap(s1, s2) {
//     if (s1.length !== s2.length) return false;
//     let diff = [];
//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] !== s2[i]) diff.push(i);
//     }
//     if (diff.length === 0) return true;
//     if (diff.length !== 2) return false;

//     let arr = s1.split('');
//     [arr[diff[0]], arr[diff[1]]] = [arr[diff[1]], arr[diff[0]]];
//     return arr.join('') === s2;
// }


// console.log(swap("1001", "1002"));
// console.log(swap("abc", "acb"));
// console.log(swap("20", "20"));
// console.log(swap("abc", "def"));

// output =
// false
// true
// true
// false