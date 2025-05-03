// CURD OPERATIO

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let viewform = document.getElementById("viewform");

let fnameedit = document.getElementById("fnameedit");
let lnameedit = document.getElementById("lnameedit");
let emailedit = document.getElementById("emailedit");
let phoneedit = document.getElementById("phoneedit");

let addform = document.querySelector("#addform"); 
let editform = document.querySelector("#editform"); 
let addModel = document.querySelector("#addModel");
let editModel = document.querySelector("#editModel");

let editIndex = null;

addform.addEventListener("submit", (e) => {
    e.preventDefault();

    let user = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        phone: phone.value,
    };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
    displayData();
    addform.reset();
});

function displayData() {
    let data = JSON.parse(localStorage.getItem("users")) || [];
    viewform.innerHTML = "";
    let rowData = "";
    data.forEach((item, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${item.fname}</td>
            <td>${item.lname}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td><button onclick="editData(${index})">Edit</button></td>
            <td><button onclick="deleteData(${index})">Delete</button></td>
            </tr>`;
        rowData += row;
    });
    viewform.innerHTML = rowData;
}

displayData();   

function deleteData(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);

    localStorage.setItem("users", JSON.stringify(users));
    displayData();
}

function editData(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let editRec = users[index];

    fnameedit.value = editRec.fname;
    lnameedit.value = editRec.lname;
    emailedit.value = editRec.email;
    phoneedit.value = editRec.phone;

    addModel.style.display = "none";
    editModel.style.display = "block";

    editIndex = index;
}

editform.addEventListener("submit", (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users[editIndex] = {
        fname: fnameedit.value,
        lname: lnameedit.value,
        email: emailedit.value,
        phone: phoneedit.value,
    };
    localStorage.setItem("users", JSON.stringify(users));
    displayData();

    addModel.style.display = "block";
    editModel.style.display = "none";
});

// fnameedit.value = users[index].fname;
//     lnameedit.value = users[index].lname;
//     emailedit.value = users[index].email;
//     phoneedit.value = users[index].phone;