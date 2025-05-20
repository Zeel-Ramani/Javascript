let users = JSON.parse(localStorage.getItem('users')) || {};
let currentUser = localStorage.getItem('currentUser') || null;

let userSelect = document.getElementById("userSelect");
let expenseList = document.getElementById("expenseList");
let totalDisplay = document.getElementById("totalDisplay");

function saveData() {
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', currentUser);
}

function populateUserDropdown() {
  userSelect.innerHTML = "";
  for (let user in users) {
    let option = document.createElement("option");
    option.value = user;
    option.textContent = user;
    userSelect.appendChild(option);
  }
  if (currentUser) {
    userSelect.value = currentUser;
  }
}

function addUser() {
  let newUserInput = document.getElementById("newUser");
  let newUser = newUserInput.value.trim();
  if (newUser && !users[newUser]) {
    users[newUser] = [];
    currentUser = newUser;
    newUserInput.value = "";
    saveData();
    populateUserDropdown();
    renderExpenses();
  }
}

userSelect.addEventListener("change", () => {
  currentUser = userSelect.value;
  saveData();
  renderExpenses();
});

function addExpense() {
  let name = document.getElementById("expenseName").value.trim();
  let amount = parseFloat(document.getElementById("expenseAmount").value);

  if (name && amount && currentUser) {
    let expense = { name, amount };
    users[currentUser].push(expense);
    saveData();
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    renderExpenses();
  }
}

function renderExpenses() {
  expenseList.innerHTML = "";
  let total = 0;
  if (currentUser && users[currentUser]) {
    for (let expense of users[currentUser]) {
      let li = document.createElement("li");
      li.textContent = `${expense.name} - ₹${expense.amount}`;
      expenseList.appendChild(li);
      total += expense.amount;
    }
  }
  totalDisplay.textContent = `Total: ₹${total}`;
}

populateUserDropdown();
renderExpenses();
