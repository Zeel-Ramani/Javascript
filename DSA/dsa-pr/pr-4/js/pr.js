// 1. Write a program for Stack Operation Program. (Insert, Delete, isEmpty, Length).

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.items.pop();
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     length() {
//         return this.items.length;
//     }
// }

// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.length()); 
// console.log(stack.pop()); 
// console.log(stack.isEmpty());

// Output:
// 3
// 3
// false


// 2. Write a program for Next Greater Element using Stack.

// let arr = [4, 5, 2, 10, 8];
// function nextGreaterElement(arr) {
//     let stack = [];
//     let result = new Array(arr.length).fill(-1);

//     for (let i = 0; i < arr.length; i++) {
//         while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
//             result[stack.pop()] = arr[i];
//         }
//         stack.push(i);
//     }

//     return result;
// }

// console.log(nextGreaterElement(arr));

// Output:
// [ 5, 10, 10, -1, -1 ]


// 3. Write a program for a reverse string using Stack.

// function reverseString(str) {
//     let stack = [];
//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i]);
//     }
//     let reversed = "";
//     while (stack.length > 0) {
//         reversed += stack.pop();
//     }
//     return reversed;
// }

// console.log(reverseString("1, 2, 3, 4, 5"));

// Output:
// 5, 4, 3, 2, 1