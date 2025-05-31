// 1. input - [10, 20, 30, 40, 50] output - [50, 10, 20, 30, 40].

// let arr = [10, 20, 30, 40, 50];

// function rotateArray(arr) {
//     if (arr.length === 0) return arr; 
//     let lastElement = arr[arr.length - 1];
//     for (let i = arr.length - 1; i > 0; i--) {
//         arr[i] = arr[i - 1]; 
//     }
//     arr[0] = lastElement;
//     return arr;
// }

// console.log(rotateArray(arr));

// 2. input - [10, 20, 30, 40, 50] output - [50, 20, 30, 40, 10].

// let arr = [10, 20, 30, 40, 50];

// function swapFirstLast(arr) {

//     let temp = arr[0];
//     arr[0] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp;

//     return arr;
// }

// console.log(swapFirstLast([10, 20, 30, 40, 50]));

// 3. WAP to find maximum element of given array.

// let arr = [7, 13, 56, 23, 45, 89, 12, 34];
// function findMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax(arr));

// 4. WAP to array reverse without built-in function.

// let arr = [1, 2, 3, 4, 5];
// function reverseArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// console.log(reverseArray(arr));

// 5. WAP to remove duplicate element form given array (without built-in function).

// let arr = [1, 2, 3, 2, 4, 5, 1, 6];
// function removeDuplicates(arr) {
//     let unique = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (unique.indexOf(arr[i]) === -1) {
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }

// console.log(removeDuplicates(arr));


// Selection sort
// Bubble sort
// Merge sort
// Quick Sort

// 1. Bubble sort

// let arr = [64, 34, 25, 12, 22, 11, 90];

// console.log("Before sorting: ", arr);

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length - i; j++) {
//         if(arr[j] > arr[j + 1])
//         {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log("After sorting: ", arr);



// 2. Selection sort

// let arr = [55, 23, 12, 45, 67, 89, 34];

// console.log("Before sorting: ", arr);

// for(let i = 0; i < arr.length; i++) {
//     for(let j = i+1; j < arr.length; j++) {
//         if(arr[i] > arr[j])
//         {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log("After sorting: ", arr);

// 3. Merge sort not use fuctions

// let arr = [38, 27, 43, 3, 9, 82, 10];

// console.log("Before sorting: ", arr);
// let mergeSort = (arr) => {
//     if (arr.length <= 1) return arr;

//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));

//     return merge(left, right);
// };

// let merge = (left, right) => {
//     let result = [];
//     let i = 0, j = 0;

//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }

//     return result.concat(left.slice(i)).concat(right.slice(j));
// };

// console.log("After sorting: ", mergeSort(arr));

// 4. Quick Sort not use functions not use const use only let

// let arr = [10, 7, 8, 9, 1, 5];
// console.log("Before sorting: ", arr);

// let quickSort = (arr) => {
//     if (arr.length <= 1) return arr;

//     let pivot = arr[0];
//     let left = [];
//     let right = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// };

// console.log("After sorting: ", quickSort(arr));


// 2D Arrays

// 1. transpose array

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let transpose = (arr) => {
//     let result = [];
//     for (let i = 0; i < arr[0].length; i++) {
//         result[i] = [];
//         for (let j = 0; j < arr.length; j++) {
//             result[i][j] = arr[j][i];
//         }
//     }
//     return result;
// }

// console.log(transpose(arr));

// 2. max element

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let maxElement = (arr) => {
//     let max = arr[0][0];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] > max) {
//                 max = arr[i][j];
//             }
//         }
//     }
//     return max;
// }

// console.log(maxElement(arr));