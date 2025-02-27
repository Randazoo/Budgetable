function saveSheet(sheet) {
    let pastSheets = JSON.parse(localStorage.getItem('pastSheets')) || [];
    pastSheets.push(sheet);
    localStorage.setItem('pastSheets', JSON.stringify(pastSheets));
}

function getPastSheets() {
    return JSON.parse(localStorage.getItem('pastSheets')) || [];
}

function exportData() {
    const data = {
        currentSheet,
        pastSheets: getPastSheets(),
        settings: {
            backgroundColor: document.body.style.backgroundColor,
            color: document.body.style.color
        }
    };
    return btoa(JSON.stringify(data));
}

function importData(encoded) {
    try {
        const data = JSON.parse(atob(encoded));
        currentSheet = data.currentSheet;
        localStorage.setItem('pastSheets', JSON.stringify(data.pastSheets));
        localStorage.setItem('currentSheet', JSON.stringify(currentSheet));
        localStorage.setItem('settings', JSON.stringify(data.settings));
        document.body.style.backgroundColor = data.settings.backgroundColor;
        document.body.style.color = data.settings.color;
        renderSpreadsheet();
        alert('Data imported successfully!');
        window.location.reload();
    } catch (e) {
        alert('Invalid import code.');
    }
}