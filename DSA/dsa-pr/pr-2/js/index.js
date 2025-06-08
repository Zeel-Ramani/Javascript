// 1. Write a program for Reverse Link List.

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class singlylinklist{
//     constructor()
//     {
//         this.head = null;
//     }

//     insert(data){
//         let newNode = new Node(data);

//         if(this.head == null){
//             this.head = newNode;
//             return;
//         }else{
//             let current = this.head;
//             while(current.next != null){
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     reverselinklist()
//     {
//         let current = this.head;
//         let prev = null;
//         let next = null;

//         while (current != null) 
//         {
//             next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }
//         this.head = prev;
//     }

//     display() {
//         if(this.head == null) {
//             console.log("List is empty");
//         }else{
//             let result = [];
//             let current = this.head;
//             while(current.next != null){
//                 result.push(current.data);
//                 current = current.next;
//             }
//             result.push(current.data);
//             console.log(result.join(" -> "));
            
//         }
//     }
// }

// let test = new singlylinklist();

// test.insert(10);
// test.insert(20);
// test.insert(30);
// test.insert(40);

// test.display();
// test.reverselinklist();
// test.display(); 

// output:  10 -> 20 -> 30 -> 40
//         40 -> 30 -> 20 -> 10


// 2. Write a Program for Given Link List is Palindrome or not.

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class singlylinklist {
//     constructor() {
//         this.head = null;
//     }

//     insert(data) {
//         let newNode = new Node(data);

//         if (this.head == null) {
//             this.head = newNode;
//             return;
//         } else {
//             let current = this.head;
//             while (current.next != null) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     display() {
//         if (this.head == null) {
//             console.log("List is empty");
//         } else {
//             let result = [];
//             let current = this.head;
//             while (current.next != null) {
//                 result.push(current.data);
//                 current = current.next;
//             }
//             result.push(current.data);
//             console.log(result.join(" -> "));
//         }
//     }

//     checkPalindrome() {
//         let current = this.head;
//         let stack = [];
//         while (current != null) {
//             stack.push(current.data);
//             current = current.next;
//         }
//         current = this.head;
//         while (current != null) {
//             if (current.data != stack.pop()) {
//                 return false;
//             }
//             current = current.next;
//         }
//         return true;
//     }
// }

// let test = new singlylinklist();

// test.insert(10);
// test.insert(20);
// test.insert(30);
// test.insert(20);
// test.insert(10);

// test.display();
// console.log(test.checkPalindrome());

// output: 10 -> 20 -> 30 -> 20 -> 10
//         true


// 3. Write a Program for circular Link List (insert, delete and display function).

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class circularlinklist {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     insert(data) {
//         let newNode = new Node(data);
//         if (this.head == null) {
//             this.head = newNode;
//             this.tail = newNode;
//             this.head.next = this.tail;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//             this.tail.next = this.head;
//         }
//     }

//     display() {
//         if (this.head == null) {
//             console.log("List is empty");
//         } else {
//             let result = [];
//             let current = this.head;
//             while (current.next != this.head) {
//                 result.push(current.data);
//                 current = current.next;
//             }
//             result.push(current.data);
//             console.log(result.join(" -> "));
//         }
//     }

//     delete(data) {
//         if (this.head == null) {
//             console.log("List is empty");
//             return;
//         }
//         let current = this.head;
//         let prev = null;

//         do {
//             if (current.data === data) {
//                 if (prev === null) { 
//                     if (this.head === this.tail) { 
//                         this.head = null;
//                         this.tail = null;
//                     } else {
//                         this.tail.next = current.next; 
//                         this.head = current.next; 
//                     }
//                 } else {
//                     prev.next = current.next; 
//                 }
//                 console.log(`Deleted: ${data}`);
//                 return;
//             }
//             prev = current;
//             current = current.next;
//         } while (current !== this.head);

//         console.log(`${data} not found in the list`);
//     }
// }

// let test = new circularlinklist();

// test.insert(10);
// test.insert(20);
// test.insert(30);
// test.insert(40);

// test.display();
// test.delete(30);
// test.display();

// output: 10 -> 20 -> 30 -> 40
//         Deleted: 30
//         10 -> 20 -> 40