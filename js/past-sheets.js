document.addEventListener('DOMContentLoaded', () => {
    let pastSheets = JSON.parse(localStorage.getItem('pastSheets')) || [];
    const list = document.getElementById('past-sheets-list');
    const viewSheet = document.getElementById('view-sheet');
    const viewTitle = document.getElementById('view-sheet-title');
    const viewBillsTable = document.getElementById('view-bills-table').querySelector('tbody');
    const viewExpensesTable = document.getElementById('view-expenses-table').querySelector('tbody');

    function renderPastSheets() {
        list.innerHTML = '';
        pastSheets.forEach((sheet, index) => {
            const saveDate = sheet.saveDate || new Date().toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            });
            const sheetDiv = document.createElement('div');
            sheetDiv.className = 'sheet-item';
            sheetDiv.innerHTML = `
                <span>${saveDate}</span>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            sheetDiv.addEventListener('click', () => {
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
            list.appendChild(sheetDiv);
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const index = btn.getAttribute('data-index');
                if (confirm('Are you sure you want to delete this sheet? This action cannot be undone.')) {
                    if (confirm('Please confirm again to delete this sheet permanently.')) {
                        pastSheets.splice(index, 1);
                        localStorage.setItem('pastSheets', JSON.stringify(pastSheets));
                        renderPastSheets();
                    }
                }
            });
        });
    }

    renderPastSheets();

    document.getElementById('back-to-dashboard').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
});