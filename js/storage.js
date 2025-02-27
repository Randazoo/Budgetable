function saveSheet(sheet) {
    let pastSheets = JSON.parse(localStorage.getItem('pastSheets')) || [];
    const index = pastSheets.findIndex(s => s.month === sheet.month);
    if (index !== -1) {
        pastSheets[index] = sheet; // Update existing month
    } else {
        pastSheets.push(sheet); // Add new month
    }
    localStorage.setItem('pastSheets', JSON.stringify(pastSheets));
}

function exportData() {
    const data = {
        currentSheet,
        pastSheets: JSON.parse(localStorage.getItem('pastSheets')) || [],
        settings: JSON.parse(localStorage.getItem('settings')) || {}
    };
    const encoded = btoa(JSON.stringify(data));
    prompt('Copy this code to save your data:', encoded);
}

function importData() {
    const encoded = prompt('Paste your import code:');
    if (encoded) {
        try {
            const data = JSON.parse(atob(encoded));
            currentSheet = data.currentSheet;
            localStorage.setItem('pastSheets', JSON.stringify(data.pastSheets));
            localStorage.setItem('settings', JSON.stringify(data.settings));
            renderSpreadsheet();
            alert('Data imported successfully!');
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