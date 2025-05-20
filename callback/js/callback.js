// Callback & Callback hell

// Callback is a function passed as an argument to another function
// Callback hell is a situation where callbacks are nested within other callbacks

// Example of a simple callback

// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback();
// }

// greet("John", function() {
//     console.log("This is a callback function.");
// })

// Example of a callback hell

function firstFunction(callback) {
  console.log("First function executed.");
  callback();
}

function secondFunction(callback) {
    console.log("Second function executed.");
    callback();
}

function thirdFunction(callback) {
    console.log("Third function executed.");
    callback();
}

firstFunction(function() {
    secondFunction(function() {
        thirdFunction(function() {
            console.log("All functions executed.");
        });
    });
})