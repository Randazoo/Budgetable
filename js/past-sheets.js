document.addEventListener('DOMContentLoaded', () => {
    const pastSheets = getPastSheets();
    const list = document.getElementById('past-sheets-list');
    const viewSheet = document.getElementById('view-sheet');
    const viewTitle = document.getElementById('view-sheet-title');
    const viewBillsTable = document.getElementById('view-bills-table').querySelector('tbody');
    const viewExpensesTable = document.getElementById('view-expenses-table').querySelector('tbody');

    pastSheets.forEach((sheet, index) => {
        const button = document.createElement('button');
        button.textContent = sheet.month;
        button.addEventListener('click', () => {
            list.classList.add('hidden');
            viewSheet.classList.remove('hidden');
            viewTitle.textContent = sheet.month;
            viewBillsTable.innerHTML = '';
            viewExpensesTable.innerHTML = '';

            sheet.bills.forEach(bill => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${bill.date}</td><td>${bill.description}</td><td>$${bill.amount.toFixed(2)}</td>`;
                viewBillsTable.appendChild(row);
            });

            sheet.expenses.forEach(expense => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${expense.date}</td><td>${expense.description}</td><td>$${expense.amount.toFixed(2)}</td>`;
                viewExpensesTable.appendChild(row);
            });

            document.getElementById('export-pdf').onclick = () => {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                doc.text(sheet.month, 10, 10);
                doc.autoTable({ startY: 20, html: '#view-bills-table', theme: 'grid' });
                doc.autoTable({ startY: doc.lastAutoTable.finalY + 10, html: '#view-expenses-table', theme: 'grid' });
                doc.save(`${sheet.month}.pdf`);
            };
        });
        list.appendChild(button);
    });

    document.getElementById('back-to-dashboard').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
});