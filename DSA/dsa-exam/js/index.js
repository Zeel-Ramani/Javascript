// 1. WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function).

// function Node(data){
//     this.data = data;
//     this.next = null;
// }

// function SinglyLinkedList() {
//     this.head = null;

//     this.add = function(data) {
//         let newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     };

//     this.delete = function(data) {
//         if (!this.head) return;
//         if (this.head.data === data) {
//             this.head = this.head.next;
//             return;
//         }
//         let current = this.head;
//         while (current.next && current.next.data !== data) {
//             current = current.next;
//         }
//         if (current.next) {
//             current.next = current.next.next;
//         }
//     };

//     this.display = function() {
//         let current = this.head;
//         let result = [];
//         while (current) {
//             result.push(current.data);
//             current = current.next;
//         }
//         console.log(result.join(" > "));
//     };
// }

// let list = new SinglyLinkedList();
// list.add(100);
// list.add(200);
// list.add(300);
// list.add(400);
// list.add(500);
// list.add(600);
// list.display();
// list.delete(500);
// list.delete(100);
// list.display();


// output = 100 > 200 > 300 > 400 > 500 > 600
// output = 200 > 300 > 400 > 600


// 2. WAP to implements Selection Sort using JavaScript DSA without any pre-defined function.

// function selectionsort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let minin = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minin]) {
//                 minin = j;
//             }
//         }
//         if (minin !== n) {
//             [arr[i], arr[minin]] = [arr[minin], arr[i]];
//         }
//     }
//     return arr;
// }

// let arr = [33, 65, 12, 45, 78, 23, 56, 89, 11, 90];
// console.log("Original Array:", arr);

// let sortedArray = selectionsort(arr);
// console.log("Sorted Array:", sortedArray);

// output = Original Array: [ 33, 65, 12, 45, 78, 23, 56, 89, 11, 90 ]
// output = Sorted Array: [ 11, 12, 23, 33, 45, 56, 65, 78, 89, 90 ]


// 3. WAP to implements Stack using JavaScript without any functions?

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

//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     display() {
//         console.log(this.items.join(" <= "));
//     }
// }

// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.display();

// output = 10 <= 20 <= 30 <= 40


// 4. WAP to implement binary Search using JavaScript with DSA?

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }

// let target = 5;
// let index = binarySearch(arr, target);
// if (index === -1) {
//     console.log("Element not found");
// } else {
//     console.log("Element found at index:", index);
// }

// output = Element found at index: 4


// 5. WAP to implement Merge sort using JavaScript without any function?

// let arr = [38, 27, 43, 3, 9, 82, 10];

// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));

//     return merge(left, right);
// }

// function merge(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// let sortedArray = mergeSort(arr);
// console.log("Original Array:", arr);
// console.log("Sorted Array:", sortedArray);

// output = Original Array: [ 38, 27, 43, 3, 9, 82, 10 ]
// output = Sorted Array: [ 3, 9, 10, 27, 38, 43, 82 ]