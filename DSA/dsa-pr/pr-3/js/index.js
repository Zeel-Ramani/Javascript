// 1. Write a program to implement binary search to find the index of a target element in a sorted array.

// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

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

// let result = binarySearch(data, 5);

// console.log("Index of target element:", result);

// output: Index of target element: 4


// 2. write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences.

// let arr = [1, 2, 2, 2, 3, 4, 5];

// function lowerBound(arr, target) {
//   let l = 0, r = arr.length;
//   while (l < r) {
//     let m = Math.floor((l + r) / 2);
//     if (arr[m] < target) l = m + 1;
//     else r = m;
//   }
//   return l;
// }

// function upperBound(arr, target) {
//   let l = 0, r = arr.length;
//   while (l < r) {
//     let m = Math.floor((l + r) / 2);
//     if (arr[m] <= target) l = m + 1;
//     else r = m;
//   }
//   return l;
// }

// function findFirstLastCount(arr, target) {
//   let first = lowerBound(arr, target);
//   let last = upperBound(arr, target) - 1;
//   let count = (first <= last && arr[first] === target) ? (last - first + 1) : 0;
//   if (count === 0) first = last = -1;
//   return { first, last, count };
// }

// let target = 2;
// let result = findFirstLastCount(arr, target);
// console.log("First:", result.first, "Last:", result.last, "Count:", result.count);


// output:// First: 1 Last: 3 Count: 3


// 3. Write a program to find the pivot index where the rotation occurs in a rotated sorted array.

// let data = [4, 5, 6, 7, 0, 1, 2];

// function findPivot(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         const mid = Math.floor((left + right) / 2);

//         if (arr[mid] > arr[right]) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }

//     return left;
// }

// let result = findPivot(data);

// console.log("Pivot index:", result);

// output: Pivot index: 3