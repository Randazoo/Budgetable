document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    // Menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        menu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && e.target !== hamburger) {
            hamburger.classList.remove('open');
            menu.classList.remove('show');
        }
    });

    // Live date and time
    function updateDateTime() {
        const datetimeElement = document.getElementById('datetime');
        if (datetimeElement) {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
            datetimeElement.textContent = `${date} ${time}`;
        }
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Modals
    const addBills = document.getElementById('add-bills');
    const addExpense = document.getElementById('add-expense');
    const colorOptions = document.getElementById('color-options');

    if (addBills) addBills.addEventListener('click', () => document.getElementById('add-bill-modal').classList.remove('hidden'));
    if (addExpense) addExpense.addEventListener('click', () => document.getElementById('add-expense-modal').classList.remove('hidden'));
    if (colorOptions) colorOptions.addEventListener('click', () => document.getElementById('color-modal').classList.remove('hidden'));

    // Close modals
    document.getElementById('cancel-bill')?.addEventListener('click', () => document.getElementById('add-bill-modal').classList.add('hidden'));
    document.getElementById('cancel-expense')?.addEventListener('click', () => document.getElementById('add-expense-modal').classList.add('hidden'));

    // Close color modal when clicking outside or cancel (if cancel button exists)
    const colorModal = document.getElementById('color-modal');
    if (colorModal) {
        colorModal.addEventListener('click', (e) => {
            if (e.target === colorModal) {
                colorModal.classList.add('hidden');
            }
        });
    }

    // Color changing
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.getAttribute('data-color');
            document.body.style.backgroundColor = color;
            document.body.style.color = (color === '#ffffff' || color === '#f5f5dc') ? '#000000' : '#ffffff';
            document.getElementById('color-modal').classList.add('hidden');
            localStorage.setItem('settings', JSON.stringify({ backgroundColor: color, color: document.body.style.color }));
        });
    });

    // Load saved settings
    const settings = JSON.parse(localStorage.getItem('settings')) || {};
    if (settings.backgroundColor) {
        document.body.style.backgroundColor = settings.backgroundColor;
        document.body.style.color = settings.color || ((settings.backgroundColor === '#ffffff' || settings.backgroundColor === '#f5f5dc') ? '#000000' : '#ffffff');
    }

    // Import/Export
    document.getElementById('export')?.addEventListener('click', () => {
        const encoded = exportData();
        prompt('Copy this code:', encoded);
    });

    document.getElementById('import')?.addEventListener('click', () => {
        const encoded = prompt('Paste your import code:');
        if (encoded) importData(encoded);
    });
});