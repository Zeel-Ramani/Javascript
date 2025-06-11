// kanades sumarray

function sumArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }
  
  return arr.reduce((sum, num) => {
    if (typeof num !== 'number') {
      throw new TypeError('Array must contain only numbers');
    }
    return sum + num;
  }, 0);
}

let numbers = [1, 2, 3, 4, 5];
let sum = sumArray(numbers);
console.log(sum);