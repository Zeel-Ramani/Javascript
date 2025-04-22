let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".btn");

let currntnumber = "";

function appendnumber(val){
    currntnumber += val;
    updatedisplay();
}

function updatedisplay(){
    display.value = currntnumber;
}

function clearall(){
    currntnumber = "";
    updatedisplay();
}

function calculate(){
    let result = eval(currntnumber);
    currntnumber = result.toString();
    updatedisplay();
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (value === "=") {
            calculate();
        } else if (value === "C") {
            clearall();
        } else {
            appendnumber(value);
        }
    });
});