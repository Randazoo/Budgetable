let currentSheet = JSON.parse(localStorage.getItem('currentSheet')) || {
    month: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
    bills: [],
    expenses: []
};

const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
if (currentSheet.month !== currentMonth) {
    saveSheet(currentSheet);
    currentSheet = {
        month: currentMonth,
        bills: currentSheet.bills, // Carry over recurring bills
        expenses: []
    };
    localStorage.setItem('currentSheet', JSON.stringify(currentSheet));
}

function formatDate(input) {
    const clean = input.replace(/\D/g, '');
    if (clean.length >= 8) {
        const month = clean.slice(0, 2);
        const day = clean.slice(2, 4);
        const year = clean.slice(4, 8);
        return `${month}/${day}/${year}`;
    }
    return input;
}

function addBill(date, description, amount) {
    currentSheet.bills.push({ date, description, amount });
    renderSpreadsheet();
    localStorage.setItem('currentSheet', JSON.stringify(currentSheet));
}

function addExpense(description, amount) {
    const date = new Date().toLocaleDateString();
    currentSheet.expenses.push({ date, description, amount });
    renderSpreadsheet();
    localStorage.setItem('currentSheet', JSON.stringify(currentSheet));
}

function deleteItem(type, index) {
    if (confirm('Are you sure you want to delete this item?')) {
        currentSheet[type].splice(index, 1);
        renderSpreadsheet();
        localStorage.setItem('currentSheet', JSON.stringify(currentSheet));
    }
}

function renderSpreadsheet() {
    const billsTable = document.getElementById('bills-table').querySelector('tbody');
    const expensesTable = document.getElementById('expenses-table').querySelector('tbody');
    billsTable.innerHTML = '';
    expensesTable.innerHTML = '';

    currentSheet.bills.forEach((bill, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td><a href="#" onclick="deleteItem('bills', ${index}); return false;">${bill.date}</a></td><td>${bill.description}</td><td>$${bill.amount.toFixed(2)}</td>`;
        billsTable.appendChild(row);
    });

    currentSheet.expenses.forEach((expense, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td><a href="#" onclick="deleteItem('expenses', ${index}); return false;">${expense.date}</a></td><td>${expense.description}</td><td>$${expense.amount.toFixed(2)}</td>`;
        expensesTable.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSpreadsheet();

    document.getElementById('bill-date').addEventListener('input', (e) => {
        e.target.value = formatDate(e.target.value);
    });

    document.getElementById('submit-bill').addEventListener('click', () => {
        const date = document.getElementById('bill-date').value;
        const description = document.getElementById('bill-description').value;
        const amount = parseFloat(document.getElementById('bill-amount').value);
        if (date && description && !isNaN(amount)) {
            addBill(date, description, amount);
            document.getElementById('add-bill-modal').classList.add('hidden');
        } else {
            alert('Please fill all fields correctly.');
        }
    });

    document.getElementById('submit-expense').addEventListener('click', () => {
        const description = document.getElementById('expense-description').value;
        const amount = parseFloat(document.getElementById('expense-amount').value);
        if (description && !isNaN(amount)) {
            addExpense(description, amount);
            document.getElementById('add-expense-modal').classList.add('hidden');
        } else {
            alert('Please fill all fields correctly.');
        }
    });

    document.getElementById('save-sheet').addEventListener('click', () => {
        saveSheet(currentSheet);
        alert('Sheet saved!');
    });
});