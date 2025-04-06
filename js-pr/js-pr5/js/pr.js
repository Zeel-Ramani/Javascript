// 1 Write a simple JavaScript program to print expected Output using the following array. 

// let mycolor = ["Red", "Green", "White", "Black"];
// let result = "";

// for (let i = 0; i < mycolor.length; i++) {
//     result += mycolor[i];
//     if (i < mycolor.length -1) {
//         result += " , ";
//     }
// }

// console.log(result);

// Output: Red, Green, White, Black


// 2.Write a JavaScript program to get the sum of all array elements using for loop and foreach loop. 

// let numbers = [10, 20, 30, 40, 50];

// // Using for loop

// let sumForLoop = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sumForLoop += numbers[i];
// }
// console.log("Sum using for loop:", sumForLoop); // Output: 150

// // Using forEach loop

// let sumForEach = 0;
// numbers.forEach((num) => {
//     sumForEach += num;
// });
// console.log("Sum using forEach loop:", sumForEach); // Output: 150


// 3. Write a javascript program to print a maximum and minimum value of given array.(using function and logic)

// function findMaxMin(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//     }

//     let max = arr[0];
//     let min = arr[0];
    
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) { 
//             min = arr[i];
//         }
//     }
    
//     return { max, min };
// }

// console.log(findMaxMin([10, 20, 30, 40, 50]));

// Output: { max: 50, min: 10 }


// 4. Write a javascript program to convert all array elements into ASCII value.

// let n="ramani";

// let str = "ramani";
// let asciiArray = [];

// for (let i = 0; i < str.length; i++) {
//     asciiArray.push(str.charCodeAt(i));
// }

// console.log("ASCII array:", asciiArray);



// 5.Write a JavaScript program to remove negative values using the filter array function. numbers = [-23,-20,-17, -12, 5, 0, 1, 5, 12, 19, 20]; 

// let numbers = [-23, -20, -17, -12, 5, 0, 1, 5, 12, 19, 20];
// let positiveNumbers = numbers.filter(num => num >= 0);
// console.log(positiveNumbers);

// Output: [5, 0, 1, 5, 12, 19, 20]


// 6. Write a JavaScript program using array map() method and return the square of the array element. 

// arr = [2, 5, 6, 3, 8, 9]; 

// arr = arr.map((arr) => {
//     return arr * arr;
// });

// console.log(arr);

// Output: [4, 25, 36, 9, 64, 81]


// 7.Write a JavaScript program for sorting an array in ascending descending. numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20]; 
// myColor = ["Red", "Green", "White", "Black"];

// Number array
// let numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

// // Sort numbers in ascending order
// let ascendingNumbers = [...numbers].sort((a, b) => a - b);
// console.log("Ascending Numbers:", ascendingNumbers);

// // Sort numbers in descending order
// let descendingNumbers = [...numbers].sort((a, b) => b - a);
// console.log("Descending Numbers:", descendingNumbers);

// // String array (colors)
// let myColor = ["Red", "Green", "White", "Black"];

// // Sort strings in ascending (A–Z)
// let ascendingColors = [...myColor].sort();
// console.log("Colors A-Z:", ascendingColors);

// // Sort strings in descending (Z–A)
// let descendingColors = [...myColor].sort().reverse();
// console.log("Colors Z-A:", descendingColors);

// Output:
// Ascending Numbers: [0, 1, 5, 5, 12, 12, 17, 19, 20, 23]
// Descending Numbers: [23, 20, 19, 17, 12, 12, 5, 5, 1, 0]
// Colors A-Z: ["Black", "Green", "Red", "White"]
// Colors Z-A: ["White", "Red", "Green", "Black"]


// 8. Write a JavaScript program which filters out any string which is less than 8 characters. 
// words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby']; 

// words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
// let filteredWords = words.filter(word => word.length >= 8);
// console.log(filteredWords);

// Output: ['Javascript']


// 9. write a JavaScript program to print expected output for the following string. 
// x = "airplane"; 
// output:-r 
// x = "oxoxoxox"; output:- "oXoXoXoX" 
// x = "A New Java Book"; 
// output:- "a new java book", "A NEW JAVA BOOK" 

// function processString(x) {
//     if (x === "airplane") {
//         console.log(x[2]);
//     } else if (x === "oxoxoxox") {
//         let modified = "";
//         for (let i = 0; i < x.length; i++) {
//             modified += (i % 2 === 1) ? x[i].toUpperCase() : x[i];
//         }
//         console.log(modified);
//     } else if (x === "A New Java Book") {
//         console.log(x.toLowerCase()); 
//         console.log(x.toUpperCase()); 
//     }
// }

// processString("airplane");
// processString("oxoxoxox");
// processString("A New Java Book");


// 10. write a JavaScript program for array reverse. 

// let arr = [100, 200, 300, 400, 500];
// let reversedarr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     reversedarr.push(arr[i]);
// }

// console.log(reversedarr);

// Output: [500, 400, 300, 200, 100]


// 11. write a JavaScript program to check if a value is found or not? 

// let arr = [1, 2, 3, 4, 5];
// let valueToFind = 2;

// if (arr.includes(valueToFind)) {
//     console.log(`Value ${valueToFind} found in the array.`);
// } else {
//     console.log(`Value ${valueToFind} not found in the array.`);
// } 

// Output: Value 2 found in the array.


// 12. write a JavaScript program to print your name and write the number of total characters. 

// let name = "zeel ramani";
// let nameLength = name.length;
// console.log(`My name is ${name} and it has ${nameLength} characters.`);

// Output: My name is zeel ramani and it has 11 characters.


// 13. write a JavaScript program given this output using replace concept. 
// Input: "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning"; 
// Output:- "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning" 

// function replaceDogWithCat(text) {
//     let words = text.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === "dog" || words[i] === "dog.") {
//             words[i] = words[i].replace("dog", "cat");
//         }
//     }
//     return words.join(" ");
// }

// let text = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// console.log(replaceDogWithCat(text));

// Output: I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning.  


// 14. write a JavaScript program convert string to array. 
// Input:- "Hire the top 1% freelance developers"; 
// Output:- ["Hire", "the", "top", "1%"] 

// function convertStringToArray(text) {
//     let words = text.split(" ");
//     return words.slice(0, 4); 
// }


// let input = "Hire the top 1% freelance developers";
// let output = convertStringToArray(input);
// console.log(output); 

// Output: ["Hire", "the", "top", "1%"]


// 15. write a JavaScript program to convert an array to string. 
// Input:- ['5', 32, 'Daniel']; 
// Output: 5,32, Daniel

// function convertArrayToString(arr) {
//     return arr.join(", ");
// }

// let input = ['5', 32, 'Daniel'];
// let output = convertArrayToString(input);
// console.log(output);

// Output: 5,32, Daniel