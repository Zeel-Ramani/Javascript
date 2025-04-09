// 1.

//     let a = 100
//     let b = 10

//     if(a < b){
//         console.log("a smallest number");
//     }else{
//         console.log("b smallest number");
//     }

// output = b

// 2.

//     let a = 10

//     if(a < 0){
//         console.log("positive");
//     }else{
//         console.log("negative");
//     }

// output = negative

// 3.

//     let score = 45;

//     if (score <= 99) {
//         console.log("You passed the exam");
//     }
//     else {
//         console.log("You failed the exam");
//     }

// output = pass

// 4. 

//     let a = 70 , b = 10 , c = 100

//     if(a > c){
//         if(a > b){
//             console.log("a largest number")
//         }else{
//             console.log("c largest number")
//         }
//     }else{
//         if(b > c){
//             console.log("b largest number")
//         }else{
//             console.log("c largest number")
//         }
//     }

// output = c largest number

// 5. 

    // let a = 50;

    // if (a%5==0){
    //     console.log("Divisible by 5")
    // }
    // else{
    //     console.log("Not divisible by 5")
    // }

// 6.

//     let a = 27

//     if(a%5==0 || a%3==0){
//         console.log(" is either divisible by 3 or 5")
//     }else{
//         console.log("is either divisible by 3 or 5")
//     }     


    // PDF

// 2.

    // let a = 18;

    // if (a <= 17) {
    //     console.log("anish eligible for voting");
    // }
    // else {
    //     console.log("anish not eligible for voting");
    // }


// 3.

    // let basicsalary = 7000;
    // let finalsalary;
    // let hra;
    // let da;
    // let hra1;
    // let da1;
    // let hra2;
    // let da2;
    // let hra3;
    // let da3;


    // if (basicsalary <= 5000) {
    //   hra = 0.08 * basicsalary;
    //   da = 0.20 * basicsalary;
    //   finalsalary = basicsalary+hra+da;
    //   console.log(finalsalary);
      
    // } else if (basicsalary <= 10000) {
    //   hra1 = 0.12 * basicsalary;
    //   da1 = 0.30 * basicsalary;
    //   finalsalary = basicsalary+hra1+da1;
    //   console.log(finalsalary);

    // } else if (basicsalary <= 15000) {
    //   hra2 = 0.15 * basicsalary;
    //   da2 = 0.40 * basicsalary;
    //   finalsalary = basicsalary+hra2+da2;
    //   console.log(finalsalary);
      
    // } else {
    //   hra3 = 0.20 * basicsalary;
    //   da3 = 0.50 * basicsalary;
    //   finalsalary = basicsalary+hra3+da3;
    //   console.log(finalsalary);
    // }

// 5.

    // let marks = 30;

    // if (marks >= 75){
    //     console.log("A")

    // }else if (marks >= 60){
    //     console.log("B")
        
    // }else if (marks >= 45){
    //     console.log("C")

    // }else if (marks >= 35){
    //     console.log("D")

    // }else if (marks < 35){
    //     console.log("Fail")
    // }   


// let parson = {
//     name: "zeel",
//     age: 17,
//     isMarried: false,
//     hobby: "cricket, traveling, gaming",
//     address: {
//         line1: "1233",
//         line2: "abc",
//         city: "indore",
//         pincode: 452001
//     }
// }

// // // console.log(parson.isMarried);


// // for in loop

// // for(let key in parson){
// //     console.log(key + " : " + parson[key]);
// // }


// // for of loop

// for(let key of Object.keys(parson)){
//     console.log(key + " : " + parson[key]);
// }    


let quotes = [ 

        {
            "quote": "Be yourself; everyone else is already taken.",
            "author": "Oscar Wilde",
            "profession": "Irish poet",
            "topics": [
                "Inspirational",
                "Advice",
                "Humor"
            ]
        },
        {
            "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
            "author": "Oscar Wilde",
            "profession": "Irish poet",
            "topics": [
                "Philosophy",
                "Humor"
            ]
        },
        {
            "quote": "True friends stab you in the front.",
            "author": "Oscar Wilde",
            "profession": "Irish poet",
            "topics": [
                "Philosophy",
                "People"
            ]
        },
        {
            "quote": "Women are made to be Loved, not understood.",
            "author": "Oscar Wilde",
            "profession": "Irish poet",
            "topics": [
                "Philosophy",
                "Humor"
            ]
        },
        {
            "quote": "Be the change that you wish to see in the world.",
            "author": "Mahatma Gandhi",
            "profession": "Indian leader",
            "topics": [
                "Inspirational",
                "Philosophy",
                "Advice"
            ]
        },
        {
            "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            "author": "Mahatma Gandhi",
            "profession": "Indian leader",
            "topics": [
                "Inspirational",
                "Life",
                "Advice"
            ]
        },
        {
            "quote": "No one can make you feel inferior without your consent.",
            "author": "Eleanor Roosevelt",
            "profession": "Former First Lady of the United States",
            "topics": [
                "Wisdom"
            ]
        },
        {
            "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
            "author": "Eleanor Roosevelt",
            "profession": "Former First Lady of the United States",
            "topics": [
                "Wisdom",
                "People"
            ]
        },
        {
            "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
            "author": "Eleanor Roosevelt",
            "profession": "Former First Lady of the United States",
            "topics": [
                "Wisdom",
                "Advice"
            ]
        },
        {
            "quote": "Do one thing every day that scares you.",
            "author": "Eleanor Roosevelt",
            "profession": "Former First Lady of the United States",
            "topics": [
                "Wisdom",
                "Life"
            ]
        },
        {
            "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
            "author": "Martin Luther King",
            "profession": "American minister",
            "topics": [
                "Inspirational",
                "Wisdom",
                "Love"
            ]
        },
        {
            "quote": "Our lives begin to end the day we become silent about things that matter.",
            "author": "Martin Luther King",
            "profession": "American minister",
            "topics": [
                "Inspirational",
                "Life"
            ]
        },
        {
            "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
            "author": "Martin Luther King",
            "profession": "American minister",
            "topics": [
                "People",
                "Life"
            ]
        },
        {
            "quote": "Injustice anywhere is a threat to justice everywhere.",
            "author": "Martin Luther King",
            "profession": "American minister",
            "topics": [
                "Wisdom"
            ]
        },
        {
            "quote": "The time is always right to do what is right.",
            "author": "Martin Luther King",
            "profession": "American minister",
            "topics": [
                "Inspirational",
                "Wisdom"
            ]
        },
        {
            "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
            "author": "Martin Luther King",
            "profession": "American minister",
            "topics": [
                "Inspirational",
                "Life",
                "People"
            ]
        },
        {
            "quote": "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
            "author": "Albert Einstein",
            "profession": "Theoretical physicist",
            "topics": [
                "Inspirational",
                "Life"
            ]
        },
        {
            "quote": "I have not failed. I've just found 10,000 ways that won't work.",
            "author": "Thomas A. Edison",
            "profession": "American inventor",
            "topics": [
                "Inspirational"
            ]
        },
        {
            "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
            "author": "Thomas A. Edison",
            "profession": "American inventor",
            "topics": [
                "Inspirational",
                "Wisdom"
            ]
        },
        {
            "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
            "author": "Thomas A. Edison",
            "profession": "American inventor",
            "topics": [
                "Inspirational",
                "Advice"
            ]
        },    

 ];

let index = 0;

// Show quote at current index
function showQuote() {
    let current = quotes[index];
    document.getElementById("quote").textContent = current.quote;
    document.getElementById("author").textContent = current.author;
    document.getElementById("profession").textContent = current.profession;
   
}

// Next quote
document.getElementById("nextBtn").addEventListener("click", function () {
    index = (index + 1) % quotes.length;
    showQuote();
});

// Previous quote
document.getElementById("prevBtn").addEventListener("click", function () {
    index = (index - 1 + quotes.length) % quotes.length;
    showQuote();
});

// Show first quote on load
showQuote();