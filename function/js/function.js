// 1.

// function zeel() {
//     let a = 115;
//     let b = 190;
//     console.log(a + b)
// }

// zeel()


// 2. NAWR

// function zeelr() {
//     let a = 10;
//     let b = 20;
//     t = a + b;
//     return t;
// }

// console.log(zeelr())


// 3. TANR
 
// function add(a,b) {
//     t = a / b;
//     console.log(t)
// }

// add(45,30);


// 4. TAWR

// function hello(a, b, c = 20){
//     t = a * b;
//     return t;
// }

// hello(40, 30);
// console.log(t)



// 5. 

// function zeel(a, b){
//     if(a > b){
//         console.log("a big number")
//     }else{
//         console.log("b big number")
//     }
// }

// zeel(30,40);

// 6.

// let a = +prompt("Enter number");

// while(a != 0){
//     switch (a) {
//         case 1:
//             zeel()
//             break;
    
//         case 2:
//             console.log(zeelr())
//             break;
    
//         case 3:
//             add(45,30)
//             break;
    
//         case 4:
//             console.log(hello(40, 30));
//             break;
    
//         default:
//             console.log("wrong");
//             break;
//     }
// }


// function num(a) {
//     if(a < 10){
//         console.log("inside", a);
//         num(++a);
//     }
//     console.log("outside", a);
    
// }

// num(1)

// function factorial(n) {
//     if (n == 0) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
  
//   console.log(factorial(5));
  
  // function pattern(n) {
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= i; j++) {
  //       console.log(j);
        
  //     }
  //     console.log("\n");
      
      
  //   }
  // }
  
  // pattern(5);

  // function printOddNumbers(n) {
  //   // Loop from 1 to n
  //    if (n === 0) {
  //   return 1;
  // } else {
  //   // Recursive case: multiply n by the factorial of (n - 1)
  //   return n * factorial(n - 1);
  // }
  //   }
  // }
  
  // // Get input from the user
  // const n = parseInt(prompt("Enter a number:"));


  
  // function factorial(n) {
  //   if (n == 0) {
  //     return 1;
  //   } else {
  //     return n * factorial(n - 1);
  //   }
  // }
  // console.log(factorial(7));

  // function fibonacci(n) {
  //   let s = 10;
  //   let a = 0, b = 1, x, i = 1;
    
  //   while (i <= n) {
  //       console.log(a);
  //       x = a + b;
  //       a = b;
  //       b = x;
  //       i++;
  //   }
  // }

  // fibonacci(15);


  // let a = function() {
  //   console.log("Hello World");
  // }

  // a();


  // let a = () => {
  //   console.log("Hello World");
  // }

  // a();

// function outside(a , b) {
//   console.log("outside", a + b);

//   function inside(b , c) {
//     console.log("inside", b !== c);
//   }
//   return inside;
// }

// outside(15 , 20)(10 , 20)

function