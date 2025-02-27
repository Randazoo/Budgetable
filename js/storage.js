function exportData() {
    const data = {
        currentSheet: JSON.parse(localStorage.getItem('currentSheet')) || {},
        pastSheets: JSON.parse(localStorage.getItem('pastSheets')) || [],
        settings: JSON.parse(localStorage.getItem('settings')) || {}
    };
    const encoded = btoa(JSON.stringify(data));
    prompt('Copy this code to save all your data:', encoded);
}

function importData() {
    const encoded = prompt('Paste your import code:');
    if (encoded) {
        try {
            const data = JSON.parse(atob(encoded));
            localStorage.setItem('currentSheet', JSON.stringify(data.currentSheet));
            localStorage.setItem('pastSheets', JSON.stringify(data.pastSheets));
            localStorage.setItem('settings', JSON.stringify(data.settings));
            alert('Data imported successfully!');
            window.location.reload();
        } catch (e) {
            alert('Invalid import code.');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const exportBtn = document.getElementById('export');
    const importBtn = document.getElementById('import');
    if (exportBtn) exportBtn.addEventListener('click', exportData);
    if (importBtn) importBtn.addEventListener('click', importData);
});