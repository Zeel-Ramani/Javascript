// 1. Write a JavaScript Function to Descending Order data converting using Bubble sort.

// function bubblesort(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
       
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 let store = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = store;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubblesort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


// 2. Write a JavaScript Function to Ascending Order data converting using Merge sort. not use method.

// let arr = [11, 56, 23, 45, 78, 12, 3, 67, 89, 35];

// function mergesort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let mid = Math.floor(arr.length / 2);
//     let left = mergesort(arr.slice(0, mid));
//     let right = mergesort(arr.slice(mid));

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

// console.log(mergesort(arr));

// Output: [3, 11, 12, 23, 35, 45, 56, 67, 78, 89]


// 3. Write a JavaScript Program 2-D array print and also print its's square of every element.

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let squarearray = (arr) => {
    let res = [];
    for (let i = 0; i < arr[0].length; i++) {
        res[i] = [];
        for (let j = 0; j < arr.length; j++) {
            res[i][j] = arr[j][i];
        }
    }
    return res;
}

console.log(squarearray(arr));

// output: [1 ,4, 7],
//         [2, 5, 8],
//         [3, 6, 9]