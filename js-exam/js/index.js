let users = JSON.parse(localStorage.getItem('users')) || {};
let currentUser = localStorage.getItem('currentUser') || null;

let userSelect = document.getElementById("userSelect");
let expenseList = document.getElementById("expenseList");
let totalDisplay = document.getElementById("totalDisplay");

let editIndex = null; // To track which expense is being edited

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
  clearExpenseInputs();
  editIndex = null;
  renderExpenses();
});

function addExpense() {
  let nameInput = document.getElementById("expenseName");
  let amountInput = document.getElementById("expenseAmount");

  let name = nameInput.value.trim();
  let amount = parseFloat(amountInput.value);

  if (!currentUser) {
    alert("Please select a user first.");
    return;
  }

  if (!name) {
    alert("Please enter expense name.");
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount greater than 0.");
    return;
  }

  if (editIndex !== null) {
    // Edit existing expense
    users[currentUser][editIndex] = { name, amount };
    editIndex = null;
  } else {
    // Add new expense
    users[currentUser].push({ name, amount });
  }

  saveData();
  clearExpenseInputs();
  renderExpenses();
}

function renderExpenses() {
  expenseList.innerHTML = "";
  let total = 0;
  if (currentUser && users[currentUser]) {
    users[currentUser].forEach((expense, index) => {
      let li = document.createElement("li");

      // Show expense with Edit and Delete buttons
      li.innerHTML = `
        ${expense.name} - ₹${expense.amount.toFixed(2)}
        <span style="float:right;">
          <button onclick="editExpense(${index})">Edit</button>
          <button onclick="deleteExpense(${index})" style="margin-left:6px; color:red;">Delete</button>
        </span>
      `;

      expenseList.appendChild(li);
      total += expense.amount;
    });
  }
  totalDisplay.textContent = `Total: ₹${total.toFixed(2)}`;
}

function editExpense(index) {
  if (!currentUser) return;

  let expense = users[currentUser][index];
  if (!expense) return;

  document.getElementById("expenseName").value = expense.name;
  document.getElementById("expenseAmount").value = expense.amount;

  editIndex = index;
}

function deleteExpense(index) {
  if (!currentUser) return;

  users[currentUser].splice(index, 1);
  saveData();

  // If currently editing deleted expense, reset editIndex
  if (editIndex === index) {
    editIndex = null;
    clearExpenseInputs();
  }

  renderExpenses();
}

function clearExpenseInputs() {
  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
}

populateUserDropdown();
renderExpenses();
