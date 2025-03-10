document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        document.body.classList.toggle('menu-open');
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && e.target !== hamburger) {
            hamburger.classList.remove('open');
            document.body.classList.remove('menu-open');
        }
    });

    function updateDateTime() {
        const datetimeElement = document.getElementById('datetime');
        if (datetimeElement) {
            const now = new Date();
            datetimeElement.textContent = now.toLocaleString();
        }
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    const addBills = document.getElementById('add-bills');
    const addExpense = document.getElementById('add-expense');
    const colorOptions = document.getElementById('color-options');

    if (addBills) addBills.addEventListener('click', () => document.getElementById('add-bill-modal').classList.remove('hidden'));
    if (addExpense) addExpense.addEventListener('click', () => document.getElementById('add-expense-modal').classList.remove('hidden'));
    if (colorOptions) colorOptions.addEventListener('click', () => document.getElementById('color-modal').classList.remove('hidden'));

    document.getElementById('cancel-bill')?.addEventListener('click', () => document.getElementById('add-bill-modal').classList.add('hidden'));
    document.getElementById('cancel-expense')?.addEventListener('click', () => document.getElementById('add-expense-modal').classList.add('hidden'));

    const colorModal = document.getElementById('color-modal');
    if (colorModal) {
        colorModal.addEventListener('click', (e) => {
            if (e.target === colorModal) {
                colorModal.classList.add('hidden');
            }
        });
    }

    // Color changing logic
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.getAttribute('data-color');
            document.body.style.backgroundColor = color;
            const textColor = (color === '#ffffff' || color === '#f5f5dc') ? '#000000' : '#ffffff';
            document.body.style.color = textColor;
            document.getElementById('color-modal').classList.add('hidden');
            localStorage.setItem('settings', JSON.stringify({ backgroundColor: color, textColor: textColor }));
        });
    });

    // Load saved settings on page load
    const settings = JSON.parse(localStorage.getItem('settings')) || {};
    if (settings.backgroundColor) {
        document.body.style.backgroundColor = settings.backgroundColor;
        document.body.style.color = settings.textColor || '#ffffff';
    }
});