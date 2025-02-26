try {
    document.body.innerHTML = '<div style="position:relative;"><h1 id="title">Budgetable By Devlin</h1><button id="menuBtn" style="position:absolute;top:0;right:0;font-size:2em;border:none;background:none;cursor:pointer;">☰</button></div><p id="subtitle">budgeting made easy for everyone</p><p id="datetime" style="font-size:1.2em;"></p><div id="menu" style="display:none;position:absolute;top:40px;right:0;background:rgba(0,0,0,0.7);border:1px solid #333;padding:15px;"><button id="homeBtn" style="font-size:1.2em;padding:12px 24px;width:180px;height:50px;margin:5px 0;border-radius:8px;background:#4A90E2;color:#fff;border:none;cursor:pointer;display:block;">Home</button><button id="colorSettingsBtn" style="font-size:1.2em;padding:12px 24px;width:180px;height:50px;margin:5px 0;border-radius:8px;background:#50C878;color:#fff;border:none;cursor:pointer;display:block;">Color Settings</button><button id="importBillsBtn" style="font-size:1.2em;padding:12px 24px;width:180px;height:50px;margin:5px 0;border-radius:8px;background:#FF6B6B;color:#fff;border:none;cursor:pointer;display:block;">Import Bills</button><button id="previousMonthsBtn" style="font-size:1.2em;padding:12px 24px;width:180px;height:50px;margin:5px 0;border-radius:8px;background:#A9A9A9;color:#fff;border:none;cursor:pointer;display:block;">Previous Months</button></div><div id="colorSettings" style="display:none;padding:15px;background:rgba(0,0,0,0.7);border:1px solid #333;border-radius:8px;"><div style="width:30px;height:30px;background:#1A2526;display:inline-block;cursor:pointer;margin:5px;border-radius:4px;" data-color="#1A2526"></div><div style="width:30px;height:30px;background:#000000;display:inline-block;cursor:pointer;margin:5px;border-radius:4px;" data-color="#000000"></div><div style="width:30px;height:30px;background:#FFFFFF;display:inline-block;cursor:pointer;margin:5px;border-radius:4px;" data-color="#FFFFFF"></div><div style="width:30px;height:30px;background:#FFFDD0;display:inline-block;cursor:pointer;margin:5px;border-radius:4px;" data-color="#FFFDD0"></div></div><div id="billsWindow" style="display:none;position:fixed;top:20%;left:10%;width:80%;background:#fff;border:1px solid #333;padding:20px;border-radius:8px;"><h3 style="font-size:1.5em;">Add Bill</h3><input id="billDue" placeholder="Due Date (MM/DD/YYYY)" style="font-size:1.2em;padding:12px;margin:5px;border-radius:8px;border:1px solid #333;"><input id="billDesc" placeholder="Description" style="font-size:1.2em;padding:12px;margin:5px;border-radius:8px;border:1px solid #333;"><input id="billAmt" type="number" placeholder="Amount" style="font-size:1.2em;padding:12px;margin:5px;border-radius:8px;border:1px solid #333;"><button id="saveBillBtn" style="font-size:1.2em;padding:12px 24px;width:120px;height:50px;margin:5px;border-radius:8px;background:#50C878;color:#fff;border:none;cursor:pointer;">Save</button><button id="closeBillsBtn" style="font-size:1.2em;padding:12px 24px;width:120px;height:50px;margin:5px;border-radius:8px;background:#FF6B6B;color:#fff;border:none;cursor:pointer;">Close</button></div><div id="previousMonths" style="display:none;position:absolute;top:40px;right:200px;background:rgba(0,0,0,0.7);border:1px solid #333;padding:15px;border-radius:8px;"></div><table border="1" style="font-size:1.2em;width:100%;margin:20px 0;border-collapse:collapse;"><tr><th style="padding:15px;border:1px solid #333;">Due Date</th><th style="padding:15px;border:1px solid #333;">Description</th><th style="padding:15px;border:1px solid #333;">Amount</th></tr><tbody id="bills"></tbody><tbody id="entries"></tbody></table><input id="desc" placeholder="Description" style="font-size:1.2em;padding:12px;margin:5px;border-radius:8px;border:1px solid #333;"><input id="amt" type="number" placeholder="Amount" style="font-size:1.2em;padding:12px;margin:5px;border-radius:8px;border:1px solid #333;"><button id="addBtn" style="font-size:1.2em;padding:12px 24px;width:120px;height:50px;margin:5px;border-radius:8px;background:#4A90E2;color:#fff;border:none;cursor:pointer;">Add</button><button id="exportBtn" style="font-size:1.2em;padding:12px 24px;width:120px;height:50px;margin:5px;border-radius:8px;background:#50C878;color:#fff;border:none;cursor:pointer;">Export</button><button id="importBtn" style="font-size:1.2em;padding:12px 24px;width:120px;height:50px;margin:5px;border-radius:8px;background:#FF6B6B;color:#fff;border:none;cursor:pointer;">Import</button>';

    let t = document.getElementById('title');
    t.style.fontFamily = 'Comic Sans MS, cursive';
    t.style.color = '#32CD32';
    t.style.textShadow = '0 0 5px #fff, 0 0 10px #32CD32, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';
    t.style.fontSize = '2.5em';
    t.style.webkitTextStroke = '1px black';

    let s = document.getElementById('subtitle');
    s.style.color = '#000000';
    s.style.fontSize = '1.5em';
    s.style.margin = '0 0 10px 0';

    let d = document.getElementById('datetime');
    d.style.color = '#000000';

    function updateDateTime() {
        let n = new Date();
        d.innerText = n.toLocaleDateString() + ' ' + n.toLocaleTimeString();
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    let currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
    let lastMonth = localStorage.getItem('lastMonth');
    if (!lastMonth || lastMonth !== currentMonth) {
        if (confirm('A new month has started (' + currentMonth + '). Would you like to save the current data for the previous month?')) {
            let dataToSave = { bills: JSON.parse(localStorage.getItem('bills') || '[]'), entries: JSON.parse(localStorage.getItem('budget') || '[]') };
            let saveKey = 'previousMonth_' + new Date().toISOString().split('T')[0];
            localStorage.setItem(saveKey, JSON.stringify(dataToSave));
            alert('Data saved for ' + saveKey);
            localStorage.setItem('lastMonth', currentMonth);
            let bills = JSON.parse(localStorage.getItem('bills') || '[]');
            bills.forEach(b => {
                let dueDate = new Date(b.due);
                if (dueDate.getDate()) {
                    dueDate.setMonth(dueDate.getMonth() + 1);
                    b.due = dueDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
                }
            });
            localStorage.setItem('bills', JSON.stringify(bills));
            localStorage.setItem('budget', '[]');
        }
    }

    let e = localStorage.getItem('budget') ? JSON.parse(localStorage.getItem('budget')) : [];
    let b = localStorage.getItem('bills') ? JSON.parse(localStorage.getItem('bills')) : [];
    let bg = localStorage.getItem('bgColor') || '#FFFFFF';
    document.body.style.backgroundColor = bg;

    let bt = document.getElementById('bills');
    let et = document.getElementById('entries');

    function rB() {
        bt.innerHTML = '';
        b.forEach((bi, i) => {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td style="padding:15px;border:1px solid #333;"><span style="cursor:pointer;text-decoration:underline;" data-index="${i}">${bi.due}</span></td><td style="padding:15px;border:1px solid #333;">${bi.desc}</td><td style="padding:15px;border:1px solid #333;">${bi.amt}</td>`;
            bt.appendChild(tr);
            tr.querySelector('span').addEventListener('click', function () {
                if (confirm('Are you sure you want to delete this bill entry?')) {
                    b.splice(i, 1);
                    localStorage.setItem('bills', JSON.stringify(b));
                    rB();
                    alert('Bill entry deleted.');
                }
            });
        });
    }

    function rE() {
        et.innerHTML = '';
        e.forEach((ei, i) => {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td style="padding:15px;border:1px solid #333;"><span style="cursor:pointer;text-decoration:underline;" data-index="${i}">${ei.date}</span></td><td style="padding:15px;border:1px solid #333;">${ei.desc}</td><td style="padding:15px;border:1px solid #333;">${ei.amt}</td>`;
            et.appendChild(tr);
            tr.querySelector('span').addEventListener('click', function () {
                if (confirm('Are you sure you want to delete this budget entry?')) {
                    e.splice(i, 1);
                    localStorage.setItem('budget', JSON.stringify(e));
                    rE();
                    alert('Budget entry deleted.');
                }
            });
        });
    }

    rB();
    rE();

    document.getElementById('addBtn').addEventListener('click', function () {
        let desc = document.getElementById('desc').value;
        let amt = document.getElementById('amt').value;
        if (desc && amt) {
            let date = new Date().toLocaleDateString();
            e.push({ date, desc, amt: parseFloat(amt) });
            localStorage.setItem('budget', JSON.stringify(e));
            document.getElementById('desc').value = '';
            document.getElementById('amt').value = '';
            rE();
            alert('Added: ' + date + ' | ' + desc + ' | ' + amt);
        } else {
            alert('Fill both fields!');
        }
    });

    document.getElementById('exportBtn').addEventListener('click', function () {
        let data = JSON.stringify({ bills: b, entries: e });
        prompt('Copy this JSON:', data);
    });

    document.getElementById('importBtn').addEventListener('click', function () {
        let data = prompt('Paste JSON here:');
        if (data) {
            try {
                let imported = JSON.parse(data);
                b = imported.bills || [];
                e = imported.entries || [];
                localStorage.setItem('bills', JSON.stringify(b));
                localStorage.setItem('budget', JSON.stringify(e));
                rB();
                rE();
                alert('Imported!');
            } catch (e) {
                alert('Invalid JSON: ' + e);
            }
        }
    });

    let m = document.getElementById('menu');
    let mb = document.getElementById('menuBtn');
    let cs = document.getElementById('colorSettings');
    let csb = document.getElementById('colorSettingsBtn');
    let bw = document.getElementById('billsWindow');
    let ib = document.getElementById('importBillsBtn');
    let sb = document.getElementById('saveBillBtn');
    let cb = document.getElementById('closeBillsBtn');
    let pm = document.getElementById('previousMonths');
    let pmb = document.getElementById('previousMonthsBtn');
    let hb = document.getElementById('homeBtn');

    mb.addEventListener('click', function () {
        m.style.display = m.style.display === 'none' ? 'block' : 'none';
        cs.style.display = 'none';
        bw.style.display = 'none';
        pm.style.display = 'none';
    });

    csb.addEventListener('click', function () {
        cs.style.display = cs.style.display === 'none' ? 'block' : 'none';
        pm.style.display = 'none';
    });

    ib.addEventListener('click', function () {
        bw.style.display = 'block';
        m.style.display = 'none';
        pm.style.display = 'none';
    });

    sb.addEventListener('click', function () {
        let due = document.getElementById('billDue').value;
        let desc = document.getElementById('billDesc').value;
        let amt = document.getElementById('billAmt').value;
        if (due && desc && amt) {
            b.push({ due, desc, amt: parseFloat(amt) });
            localStorage.setItem('bills', JSON.stringify(b));
            document.getElementById('billDue').value = '';
            document.getElementById('billDesc').value = '';
            document.getElementById('billAmt').value = '';
            rB();
            bw.style.display = 'none';
            alert('Bill added: ' + due + ' | ' + desc + ' | ' + amt);
        } else {
            alert('Fill all bill fields!');
        }
    });

    cb.addEventListener('click', function () {
        bw.style.display = 'none';
    });

    pmb.addEventListener('click', function () {
        pm.style.display = pm.style.display === 'none' ? 'block' : 'none';
        cs.style.display = 'none';
        bw.style.display = 'none';
        if (pm.innerHTML === '') {
            let keys = Object.keys(localStorage).filter(k => k.startsWith('previousMonth_'));
            pm.innerHTML = '<h3 style="font-size:1.5em;color:#fff;">Previous Months</h3>';
            keys.forEach(k => {
                let date = k.replace('previousMonth_', '');
                let container = document.createElement('div');
                let btn = document.createElement('button');
                let delBtn = document.createElement('button');
                btn.textContent = date;
                btn.style.fontSize = '1.2em';
                btn.style.padding = '12px 24px';
                btn.style.margin = '5px 0';
                btn.style.width = '180px';
                btn.style.height = '50px';
                btn.style.borderRadius = '8px';
                btn.style.background = '#4A90E2';
                btn.style.color = '#fff';
                btn.style.border = 'none';
                btn.style.cursor = 'pointer';
                btn.style.display = 'block';
                delBtn.textContent = 'Delete';
                delBtn.style.fontSize = '1.2em';
                delBtn.style.padding = '12px 24px';
                delBtn.style.margin = '5px 0';
                delBtn.style.width = '120px';
                delBtn.style.height = '50px';
                delBtn.style.borderRadius = '8px';
                delBtn.style.background = '#FF6B6B';
                delBtn.style.color = '#fff';
                delBtn.style.border = 'none';
                delBtn.style.cursor = 'pointer';
                delBtn.style.display = 'block';
                delBtn.addEventListener('click', function () {
                    if (confirm('Are you sure you want to delete the save for ' + date + '?')) {
                        localStorage.removeItem(k);
                        alert('Save for ' + date + ' deleted.');
                        pm.innerHTML = '';
                        pmb.click();
                    }
                });
                btn.addEventListener('click', function () {
                    let data = JSON.parse(localStorage.getItem(k));
                    b = data.bills;
                    e = data.entries;
                    localStorage.setItem('bills', JSON.stringify(b));
                    localStorage.setItem('budget', JSON.stringify(e));
                    rB();
                    rE();
                    alert('Loaded data for ' + date);
                    pm.style.display = 'none';
                });
                container.appendChild(btn);
                container.appendChild(delBtn);
                pm.appendChild(container);
            });
        }
    });

    hb.addEventListener('click', function () {
        e = JSON.parse(localStorage.getItem('budget') || '[]');
        b = JSON.parse(localStorage.getItem('bills') || '[]');
        rB();
        rE();
        m.style.display = 'none';
        alert("Returned to current month's spreadsheet.");
    });

    let cd = colorSettings.getElementsByTagName('div');
    for (let i = 0; i < cd.length; i++) {
        cd[i].addEventListener('click', function () {
            let c = this.getAttribute('data-color');
            document.body.style.backgroundColor = c;
            localStorage.setItem('bgColor', c);
            uTC(c);
            m.style.display = 'none';
            cs.style.display = 'none';
        });
    }

    function uTC(bgC) {
        let isD = (bgC === '#1A2526' || bgC === '#000000');
        let tC = isD ? '#FFFFFF' : '#000000';
        document.getElementById('subtitle').style.color = tC;
        document.getElementById('datetime').style.color = tC;
        document.querySelectorAll('input, button, table, th, td').forEach(e => {
            e.style.color = tC;
        });
    }
    uTC(bg);
} catch (e) {
    alert('Error: ' + e);
}