// Introduction of recursion

// function factorial(n) {
//     if (n ==0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(10));

// function test(n){

//     console.log("zeel ramani");

//     if (n > 0) {
//         test(n - 1);
//     }
// }

// test(5);

// Binary search using recursion

// let data = [11, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

// function binarySearch(arr, searchele, low, high) {

//     if (low > high) {
//         return -1;
//     }

//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] === searchele) {
//         return mid;
//     } else if (arr[mid] < searchele) {
//         return binarySearch(arr, searchele, mid + 1, high);
//     } else {
//         return binarySearch(arr, searchele, low, mid - 1); 
//     }

// }

// let res = binarySearch(data, 30, 0, data.length - 1);

// if (res == -1) {
//     console.log("Element not found");
// }else {
//     console.log("Element found at index: " + res);
// }

// Lower bound

// let data = [11, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

// function lowerBound(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     let result = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (arr[mid] < target) {
//             low = mid + 1;
//         } else {
//             result = mid;
//             high = mid - 1;
//         }
//     }

//     return result;
// }

// let res = lowerBound(data, 30);

// if (res == -1) {
//     console.log("Element not found");
// } else {
//     console.log("Lower bound: " + res);
// }

// Upper bound

let data = [22, 25, 30, 30, 30, 35, 40, 45, 50, 55, 60];
function upperBound(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] <= target) {
            result = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
}

let res = upperBound(data, 47);

if (res == -1) {
    console.log("Element not found");
} else {
    console.log("Upper bound: " + res);
}