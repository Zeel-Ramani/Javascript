// Searching binary

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return -1;
// }

// let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let targetValue = 7;
// let index = binarySearch(sortedArray, targetValue);

// if (index !== -1) {
//   console.log(`Element found at index: ${index}`);
// } else {
//     console.log("Element not found in the array.");
// }


// Two pointer technique

// function twoPointerSum(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     const sum = arr[left] + arr[right];

//     if (sum === target) {
//       return [arr[left], arr[right]];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return null;
// }

// let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let targetValue = 15;
// let result = twoPointerSum(sortedArray, targetValue);

// if (result) {
//   console.log(`Pair found: (${result[0]}, ${result[1]})`);
// } else {
//   console.log("No pair found that adds up to the target value.");
// }