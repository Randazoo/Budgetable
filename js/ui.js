document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const colorOptions = document.getElementById('color-options');
    const colorModal = document.getElementById('color-modal');

    // Menu toggle for hamburger icon
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

    // Update date and time
    function updateDateTime() {
        const datetimeElement = document.getElementById('datetime');
        if (datetimeElement) {
            const now = new Date();
            datetimeElement.textContent = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        }
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Function to set background color and adjust hamburger icon
    function setBackgroundColor(color) {
        document.body.style.backgroundColor = color;
        document.body.style.color = (color === '#ffffff' || color === '#f5f5dc') ? '#000000' : '#ffffff';
        // Adjust hamburger icon color based on background
        if (color === '#ffffff' || color === '#f5f5dc') { // Light backgrounds: White, Cream White
            document.body.classList.add('light-bg');
            document.body.classList.remove('dark-bg');
        } else { // Dark backgrounds: Black, Shadowy Navy Blue
            document.body.classList.add('dark-bg');
            document.body.classList.remove('light-bg');
        }
        localStorage.setItem('settings', JSON.stringify({ backgroundColor: color, color: document.body.style.color }));
    }

    // Load saved settings
    const settings = JSON.parse(localStorage.getItem('settings')) || {};
    if (settings.backgroundColor) {
        setBackgroundColor(settings.backgroundColor);
    } else {
        setBackgroundColor('#001f3f'); // Default to Shadowy Navy Blue
    }

    // Show color modal only when clicking "Color Options"
    if (colorOptions && colorModal) {
        colorOptions.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default link behavior
            colorModal.classList.remove('hidden');
        });

        // Close color modal when clicking outside
        colorModal.addEventListener('click', (e) => {
            if (e.target === colorModal) {
                colorModal.classList.add('hidden');
            }
        });

        // Color buttons
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const color = btn.getAttribute('data-color');
                setBackgroundColor(color);
                colorModal.classList.add('hidden');
            });
        });
    }

    // Handle other modals (add bill, add expense)
    const addBills = document.getElementById('add-bills');
    const addExpense = document.getElementById('add-expense');
    if (addBills) addBills.addEventListener('click', () => document.getElementById('add-bill-modal').classList.remove('hidden'));
    if (addExpense) addExpense.addEventListener('click', () => document.getElementById('add-expense-modal').classList.remove('hidden'));

    document.getElementById('cancel-bill')?.addEventListener('click', () => document.getElementById('add-bill-modal').classList.add('hidden'));
    document.getElementById('cancel-expense')?.addEventListener('click', () => document.getElementById('add-expense-modal').classList.add('hidden'));

    // Ensure all modals are hidden on page load
    window.addEventListener('load', () => {
        document.querySelectorAll('.modal').forEach(modal => modal.classList.add('hidden'));
    });
});