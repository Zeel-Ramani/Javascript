// 1. Write a JAVASCRIPT Program to display the multiplication table of a given integer using a while loop.
    
//  let a="15";
//     for(n=1; n<=10; n++){
//         let b;
//         v=a*n;
//         console.log(a+" x "+n+" =>> "+v);
//     }


// 2.Write a JAVASCRIPT program to calculate the factorial of a given number using a while loop.
    
// let f = 1;
// let i = 5;

// while (i > 1) {
//     f *= i;
//     i--;
// }
// console.log(f);


// 3.Write a JAVASCRIPT Program to find the Armstrong number list of a given number using a do while loop.

// let limit = 20;
// let num = 1;

// if (limit > 0) {
//     console.log(`Armstrong numbers up to ${limit}:`);

//     do {
//         let temp = num, sum = 0, digits = ('' + num).length;

//         while (temp) {
//             let digit = temp % 10, power = 1, exp = digits;
//             while (exp--) power *= digit;
//             sum += power;
//             temp = ~~(temp / 10);
//         }

//         if (sum === num) console.log(num);
//         num++;
//     } while (num <= limit);
// } else {
//     console.log("Invalid number.");
// }


// 4.Write a JAVASCRIPT Program to find the Palindrome number list of a given number using a while loop.

// let l = 150;  
// let n = 1;

// while (n <= l) {
//     let o = n;
//     let r = 0;
//     let t = n;

//     while (t > 0) {
//         let d = t % 10;
//         r = r * 10 + d;
//         t = (t - (t % 10)) / 10;  
//     }

//     if (o === r) {
//         console.log(n);
//     }

//     n++;
// }


// 5.Write a JAVASCRIPT program to Calculate the Fibonacci Series of a given number using a while loop.

// let t = 10;

// let a = 0, b = 1, n;
// let c = 0;

// console.log(`Fibonacci series with terms:`);

// while (c < t) {
//     console.log(a);

//     n = a + b;
//     a = b;
//     b = n;

//     c++;
// }


// 6.Write a JAVASCRIPT program to add all the integers between 0 and 30 and display the total using do while loop.

// let t = 0;
// let n = 0;

// do {
//     t += n;
//     n++;
// } while (n <= 30);

// console.log(t);


// 7.Write a JAVASCRIPT program which iterates the integers from 1 to 100. For multiples of three print "Fizz" insetad of the number and for the multiples of five print "Buzz". For number which are multiples of both three and five print "FizzBuss" using do while loop.

// let i = 1;
// do {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
//   i++;
// } while (i <= 100);     


// 8. Write a JAVASCRIPT program that display 1-2-3-4-5-6-7-8-9-10 on one line using a for loop. There will be no hyphen(-) at starting and ending porition.

// let k = "";
// for (let i = 1; i <= 10; i++) {
//   k += i;
//   if (i < 10) {
//     k += "-";
//   }
// }
// console.log(k);


// 9.Write a JAVASCRIPT program that display 1+4+9+16+...+100=385 on one line using a for loop.

// let u = 0;
// let s = "";

// for (let i = 1; i <= 10; i++) {
//     let r = i * i;
//     u += r;

//     s += r;

//     if (i < 10) {
//         s += " + ";
//     }
// }

// console.log(s, "=>", u);


// 10. Write a JAVASCRIPT program that display below pattern using nested for loop.

// let p="";

// for(let i = 5; i >= 1; i--)
//     {
//     for(let j = 5; j >= i; j--){
//         p+=j;
//     }
//     p+="\n"
// }
// console.log(p);


// 11. Write a JAVASCRIPT program that display below pattern using nested for loop.

// let r = 5;
// let v = 1;
// let p = "";

// for (let n = 1; n <= r; n++) {
//    for (let num = 1; num <= n; num++) {
//       p += v+" ";
//       v++;
//    }
//    p += "\n";
// }
// console.log(p);