// Budget App

let income = 0;
let expenses = 0;

// Add income
document.getElementById('add-income').addEventListener('click', () => {
    const incomeInput = document.getElementById('income-input').value;
    if (incomeInput) {
        income += parseFloat(incomeInput);
        updateBudget();
        document.getElementById('income-input').value = '';
    }
});

// Add expense
document.getElementById('add-expense').addEventListener('click', () => {
    const expenseInput = document.getElementById('expense-input').value;
    if (expenseInput) {
        expenses += parseFloat(expenseInput);
        updateBudget();
        document.getElementById('expense-input').value = '';
    }
});

// Update budget and balance
function updateBudget() {
    const balance = income - expenses;
    document.getElementById('balance').textContent = balance.toFixed(2);
    document.getElementById('budget').textContent = income.toFixed(2);
}