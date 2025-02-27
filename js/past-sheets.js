<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Past Sheets - Budgetable</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/animations.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.14/jspdf.plugin.autotable.min.js"></script>
</head>
<body>
    <div class="page-wrapper">
        <header>
            <div id="hamburger" class="hamburger-css"></div>
            <h1>Past Sheets</h1>
        </header>
        <main>
            <button id="back-to-dashboard">Back to Dashboard</button>
            <div class="sheet-list" id="past-sheets-list"></div>
            <div id="view-sheet" class="hidden">
                <h3 id="view-sheet-title"></h3>
                <table id="view-bills-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <table id="view-expenses-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <button id="export-pdf">Export as PDF</button>
            </div>
        </main>
    </div>
    <nav id="menu" class="side-menu hidden">
        <ul>
            <li><a href="dashboard.html">Dashboard</a></li>
            <li><a href="#" id="add-bills">Add Bills to Dashboard</a></li>
            <li><a href="past-sheets.html">Past Sheets</a></li>
            <li><a href="#" id="color-options">Color Options</a></li>
            <li><a href="#" id="import">Import</a></li>
            <li><a href="#" id="export">Export</a></li>
        </ul>
    </nav>

    <div id="color-modal" class="modal hidden">
        <div class="modal-content">
            <h3>Choose Background Color</h3>
            <button class="color-btn" data-color="#15202B">Shadow</button>
            <button class="color-btn" data-color="#000000">Black</button>
            <button class="color-btn" data-color="#ffffff">White</button>
            <button class="color-btn" data-color="#f5f5dc">Cream White</button>
        </div>
    </div>

    <script src="../js/ui.js"></script>
    <script src="../js/storage.js"></script>
    <script src="../js/past-sheets.js"></script>
</body>
</html>