try{document.body.style.overflow="hidden",Array.from(document.body.children).forEach(e=>{"budgetable-app"!==e.id&&(e.style.display="none")});var e=document.createElement("div");e.id="budgetable-app",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.zIndex="9999",e.style.backgroundColor=localStorage.getItem("bgColor")||"#FFFFFF",e.style.overflow="auto",e.className="d-flex flex-column",e.innerHTML='<nav class="navbar navbar-light bg-light" style="position:relative;padding:15px;"><h1 id="title" class="navbar-brand" style="font-family:\'Comic Sans MS\', cursive; color:#32CD32; text-shadow: 0 0 5px #fff, 0 0 10px #32CD32, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; font-size:1.8em; -webkit-text-stroke:1px black;">Budgetable By Devlin</h1><button id="menuBtn" class="navbar-toggler" type="button" style="border:none;background:none;cursor:pointer;"><span class="navbar-toggler-icon" style="font-size:1.5em;">☰</span></button></nav><p id="subtitle" class="text-center mt-2" style="font-size:1em;color:#000000;">budgeting made easy for everyone</p><p id="datetime" class="text-center mb-3" style="font-size:0.9em;color:#000000;"></p><div id="menu" class="dropdown-menu show" style="display:none;position:absolute;top:60px;right:15px;background:rgba(0,0,0,0.7);border:1px solid #333;padding:15px;border-radius:8px;min-width:200px;"><button id="homeBtn" class="btn btn-primary btn-block mb-2" style="font-size:1em;padding:10px;width:100%;">Home</button><button id="colorSettingsBtn" class="btn btn-success btn-block mb-2" style="font-size:1em;padding:10px;width:100%;">Color Settings</button><button id="importBillsBtn" class="btn btn-danger btn-block mb-2" style="font-size:1em;padding:10px;width:100%;">Import Bills</button><button id="previousMonthsBtn" class="btn btn-secondary btn-block mb-2" style="font-size:1em;padding:10px;width:100%;">Previous Months</button></div><div id="colorSettings" style="display:none;padding:15px;background:rgba(0,0,0,0.7);border:1px solid #333;border-radius:8px;position:absolute;top:60px;right:15px;"><div style="width:30px;height:30px;background:#1A2526;display:inline-block;cursor:pointer;margin:5px;border-radius:4px;" data-color="#1A2526"></div><div style="width:30px;height:30px;background:#000000;display:inline-block;cursor:pointer;margin:5px;border-radius:4px;" data-color="#000000"></div><div style="width:30px;height:30px;background:#FFFFFF;display:inline-block;cursor:pointer;margin:5px;border-radius:4px;" data-color="#FFFFFF"></div><div style="width:30px;height:30px;background:#FFFDD0;display:inline-block;cursor:pointer;margin:5px;border-radius:4px;" data-color="#FFFDD0"></div></div><div id="billsWindow" style="display:none;position:fixed;top:10%;left:5%;width:90%;max-width:500px;background:#fff;border:1px solid #333;padding:20px;border-radius:8px;z-index:10000;"><h3 style="font-size:1.2em;">Add Bill</h3><input id="billDue" class="form-control mb-2" placeholder="Due Date (MM/DD/YYYY)" style="font-size:1em;padding:10px;"><input id="billDesc" class="form-control mb-2" placeholder="Description" style="font-size:1em;padding:10px;"><input id="billAmt" type="number" class="form-control mb-2" placeholder="Amount" style="font-size:1em;padding:10px;"><div class="d-flex justify-content-between"><button id="saveBillBtn" class="btn btn-success flex-fill me-2" style="font-size:1em;padding:10px 20px;">Save</button><button id="closeBillsBtn" class="btn btn-danger flex-fill" style="font-size:1em;padding:10px 20px;">Close</button></div></div><div id="previousMonths" style="display:none;position:absolute;top:60px;right:15px;background:rgba(0,0,0,0.7);border:1px solid #333;padding:15px;border-radius:8px;max-width:250px;"><h3 style="font-size:1em;color:#fff;">Previous Months</h3></div><div class="container-fluid p-3 d-flex flex-column flex-grow-1" style="overflow-y:auto;max-height:calc(100vh - 200px);"><table class="table table-bordered table-responsive" style="font-size:0.9em;margin-bottom:20px;width:100%;"><thead><tr><th style="padding:10px;">Due Date</th><th style="padding:10px;">Description</th><th style="padding:10px;">Amount</th></tr></thead><tbody id="bills"></tbody><tbody id="entries"></tbody></table><div class="row g-2"><div class="col-12 col-md-4"><input id="desc" class="form-control" placeholder="Description" style="font-size:1em;padding:10px;"></div><div class="col-12 col-md-4"><input id="amt" type="number" class="form-control" placeholder="Amount" style="font-size:1em;padding:10px;"></div><div class="col-12 col-md-4 d-flex"><button id="addBtn" class="btn btn-primary w-100" style="font-size:1em;padding:10px 20px;">Add</button></div><div class="col-12 col-md-4 d-flex"><button id="exportBtn" class="btn btn-success w-100" style="font-size:1em;padding:10px 20px;">Export</button></div><div class="col-12 col-md-4 d-flex"><button id="importBtn" class="btn btn-danger w-100" style="font-size:1em;padding:10px 20px;">Import</button></div></div></div>',document.body.appendChild(e);var t=document.getElementById("title"),n=document.getElementById("subtitle"),i=document.getElementById("datetime");function o(){var e=new Date;i.innerText=e.toLocaleDateString()+" "+e.toLocaleTimeString()}t.style.fontFamily="Comic Sans MS, cursive",t.style.color="#32CD32",t.style.textShadow="0 0 5px #fff, 0 0 10px #32CD32, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",t.style.fontSize="1.8em",t.style.webkitTextStroke="1px black",n.style.color="#000000",n.style.fontSize="1em",i.style.color="#000000",o(),setInterval(o,1e3);var a=new Date().toLocaleString("default",{month:"long",year:"numeric"}),l=localStorage.getItem("lastMonth");if(!l||l!==a)if(confirm("A new month has started ("+a+"). Would you like to save the current data for the previous month?")){var r={bills:JSON.parse(localStorage.getItem("bills")||"[]"),entries:JSON.parse(localStorage.getItem("budget")||"[]")},s="previousMonth_"+new Date().toISOString().split("T")[0];localStorage.setItem(s,JSON.stringify(r)),alert("Data saved for "+s),localStorage.setItem("lastMonth",a);var d=JSON.parse(localStorage.getItem("bills")||"[]");d.forEach(e=>{var t=new Date(e.due);t.getDate()&&(t.setMonth(t.getMonth()+1),e.due=t.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}))}),localStorage.setItem("bills",JSON.stringify(d)),localStorage.setItem("budget","[]")}var c=localStorage.getItem("budget")?JSON.parse(localStorage.getItem("budget")):[],u=localStorage.getItem("bills")?JSON.parse(localStorage.getItem("bills")):[],g=localStorage.getItem("bgColor")||"#FFFFFF";e.style.backgroundColor=g;var p=document.getElementById("bills"),m=document.getElementById("entries");function y(){p.innerHTML="",u.forEach((e,t)=>{var n=document.createElement("tr");n.innerHTML=`<td style="padding:10px;"><span style="cursor:pointer;text-decoration:underline;" data-index="${t}">${e.due}</span></td><td style="padding:10px;">${e.desc}</td><td style="padding:10px;">${e.amt}</td>`,p.appendChild(n),n.querySelector("span").addEventListener("click",function(){confirm("Are you sure you want to delete this bill entry?")&&(u.splice(t,1),localStorage.setItem("bills",JSON.stringify(u)),y(),alert("Bill entry deleted."))})})}function b(){m.innerHTML="",c.forEach((e,t)=>{var n=document.createElement("tr");n.innerHTML=`<td style="padding:10px;"><span style="cursor:pointer;text-decoration:underline;" data-index="${t}">${e.date}</span></td><td style="padding:10px;">${e.desc}</td><td style="padding:10px;">${e.amt}</td>`,m.appendChild(n),n.querySelector("span").addEventListener("click",function(){confirm("Are you sure you want to delete this budget entry?")&&(c.splice(t,1),localStorage.setItem("budget",JSON.stringify(c)),b(),alert("Budget entry deleted."))})})}y(),b(),document.getElementById("addBtn").addEventListener("click",function(){var e=document.getElementById("desc").value,t=document.getElementById("amt").value;e&&t?(c.push({date:new Date().toLocaleDateString(),desc:e,amt:parseFloat(t)}),localStorage.setItem("budget",JSON.stringify(c)),document.getElementById("desc").value="",document.getElementById("amt").value="",b(),alert("Added: "+new Date().toLocaleDateString()+" | "+e+" | "+t)):alert("Fill both fields!")}),document.getElementById("exportBtn").addEventListener("click",function(){prompt("Copy this JSON:",JSON.stringify({bills:u,entries:c}))}),document.getElementById("importBtn").addEventListener("click",function(){var e=prompt("Paste JSON here:");if(e)try{var t=JSON.parse(e);u=t.bills||[],c=t.entries||[],localStorage.setItem("bills",JSON.stringify(u)),localStorage.setItem("budget",JSON.stringify(c)),y(),b(),alert("Imported!")}catch(e){alert("Invalid JSON: "+e)}});var v=document.getElementById("menu"),h=document.getElementById("menuBtn"),f=document.getElementById("colorSettings"),E=document.getElementById("colorSettingsBtn"),S=document.getElementById("billsWindow"),I=document.getElementById("importBillsBtn"),x=document.getElementById("saveBillBtn"),B=document.getElementById("closeBillsBtn"),w=document.getElementById("previousMonths"),C=document.getElementById("previousMonthsBtn"),T=document.getElementById("homeBtn");h.addEventListener("click",function(){v.style.display="none"===v.style.display?"block":"none",f.style.display="none",S.style.display="none",w.style.display="none"}),E.addEventListener("click",function(){f.style.display="none"===f.style.display?"block":"none",w.style.display="none"}),I.addEventListener("click",function(){S.style.display="block",v.style.display="none",w.style.display="none"}),x.addEventListener("click",function(){var e=document.getElementById("billDue").value,t=document.getElementById("billDesc").value,n=document.getElementById("billAmt").value;e&&t&&n?(u.push({due:e,desc:t,amt:parseFloat(n)}),localStorage.setItem("bills",JSON.stringify(u)),document.getElementById("billDue").value="",document.getElementById("billDesc").value="",document.getElementById("billAmt").value="",y(),S.style.display="none",alert("Bill added: "+e+" | "+t+" | "+n)):alert("Fill all bill fields!")}),B.addEventListener("click",function(){S.style.display="none"}),C.addEventListener("click",function(){w.style.display="none"===w.style.display?"block":"none",f.style.display="none",S.style.display="none",""===w.innerHTML&&(w.innerHTML='<h3 style="font-size:1em;color:#fff;">Previous Months</h3>',Object.keys(localStorage).filter(e=>e.startsWith("previousMonth_")).forEach(e=>{var t=e.replace("previousMonth_",""),n=document.createElement("div"),i=document.createElement("button"),o=document.createElement("button");i.textContent=t,i.className="btn btn-primary btn-block",i.style.fontSize="1em",i.style.padding="10px",i.style.width="100%",i.style.margin="5px 0",o.textContent="Delete",o.className="btn btn-danger btn-block",o.style.fontSize="1em",o.style.padding="10px",o.style.width="100%",o.style.margin="5px 0",o.addEventListener("click",function(){confirm("Are you sure you want to delete the save for "+t+"?")&&(localStorage.removeItem(e),alert("Save for "+t+" deleted."),w.innerHTML="",C.click())}),i.addEventListener("click",function(){var e=JSON.parse(localStorage.getItem(e));u=e.bills,c=e.entries,localStorage.setItem("bills",JSON.stringify(u)),localStorage.setItem("budget",JSON.stringify(c)),y(),b(),alert("Loaded data for "+t),w.style.display="none"}),n.appendChild(i),n.appendChild(o),w.appendChild(n)}))}),T.addEventListener("click",function(){c=JSON.parse(localStorage.getItem("budget")||"[]"),u=JSON.parse(localStorage.getItem("bills")||"[]"),y(),b(),v.style.display="none",alert("Returned to current month's spreadsheet.")});var D=document.getElementById("colorSettings").getElementsByTagName("div");for(let e=0;e<D.length;e++)D[e].addEventListener("click",function(){var t=this.getAttribute("data-color");e.style.backgroundColor=t,localStorage.setItem("bgColor",t),k(t),v.style.display="none",f.style.display="none"});function k(t){var n="#1A2526"===t||"#000000"===t?"#FFFFFF":"#000000";document.getElementById("subtitle").style.color=n,document.getElementById("datetime").style.color=n,document.querySelectorAll("#budgetable-app input, #budgetable-app button, #budgetable-app table, #budgetable-app th, #budgetable-app td").forEach(e=>{e.style.color=n})}k(g)}catch(e){alert("Error: "+e)}