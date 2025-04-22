// class Hii {

//     a = 200;

//     hello() {
//         console.log("hello world", this.a);
//     }
// }

// let opjs = new Hii();
// opjs.hello();


// single inheritance

// class perent{

//     display(){
//         console.log("zeel")
//     }
// }

// class child extends perent{

//     display1(){
//         console.log("hello")
//     }
// }

// let obj = new child();
// obj.display1();


// multilevel inheritance

// class perent{
//     constructor(){
//         console.log("perent constructor")
//     }
//     hii(){
//         console.log("hello");
//     }
// }

// class child extends perent{
//     constructor(){
//         super();
//         console.log("child constructor")
//     }
//     hello(){
//         console.log("zeel ramani")
//     }
// }

// class child1 extends perent{
//     constructor(){
//         super();
//         console.log("child1 constructor")
//     }
//     display(){
//         console.log("1223")
//     }
// }

// let obj = new child1();
// obj.display();
// obj.hii();


// hierarchial inheritance

class perent{
    constructor(){
        console.log("perent constructor")
    }
    hii(){
        console.log("hello");
    }
}

class child extends perent{
    constructor(){
        super();
        console.log("child constructor")
    }
    hello(){

        console.log("zeel ramani")
    }
}

class child1 extends perent{
    constructor(){
        super();
        console.log("child1 constructor")
    }
    display(){
        console.log("animal")
    }
}

let obj = new child1();
obj.display();
obj.hii();
obj.hello()