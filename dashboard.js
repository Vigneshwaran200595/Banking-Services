/* Shared dashboard JS
   - chart helpers
   - download helpers
   - menu highlight (if user lands directly)
   - initializes charts only for canvases that exist on the page
*/

// Navigation helper for pages that include event param
function highlightMenuForPath() {
  // find menu items and mark active based on current pathname
  const map = {
    '/dashboard.html': 'Dashboard',
    '/customers.html': 'Customer Accounts',
    '/creditcards.html': 'Credit Card Applications',
    '/loans.html': 'Loan Applications',
    '/transactions.html': 'Transactions',
    '/reports.html': 'Reports & Analytics'
  };
  // simple URL check
  const path = window.location.pathname.split('/').pop().toLowerCase();
  document.querySelectorAll('.menu-item').forEach(mi => mi.classList.remove('active'));
  // find a menu item whose text starts with an entry matching
  if (path) {
    const el = Array.from(document.querySelectorAll('.menu-item')).find(a=>{
      return a.textContent.trim().toLowerCase().startsWith(path.replace('.html','').replace('-',' '));
    });
    if (el) el.classList.add('active');
  } else {
    // default first
    const first = document.querySelector('.menu-item');
    if (first) first.classList.add('active');
  }
}

// download CSV helper
function downloadCSV(title, labels, values){
  const rows = [labels.split(','), values.split(',')];
  let csv = title + '\n';
  rows.forEach(r => { csv += r.join(',') + '\n'; });
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = title.replace(/\s+/g,'_') + '.csv';
  document.body.appendChild(a); a.click(); a.remove();
}

// download dummy report
function downloadReport(name){
  const data = `${name}\nGenerated: ${new Date().toLocaleString()}\n\nThis is a generated dummy report.`;
  const blob = new Blob([data], {type:'text/plain;charset=utf-8;'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name.replace(/\s+/g,'_') + '.txt';
  document.body.appendChild(a); a.click(); a.remove();
}

/* Chart helpers (Chart.js must be present) */
function makeLine(ctx, labels, data, color){
  if(!ctx) return null;
  return new Chart(ctx, {
    type:'line',
    data:{ labels, datasets:[{ data, borderColor: color, backgroundColor: color, fill:false, tension:0.35, pointRadius:4 }]},
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ x:{ grid:{display:false}}, y:{ grid:{color:'#eee'}} } }
  });
}
function makeBar(ctx, labels, data, color){
  if(!ctx) return null;
  return new Chart(ctx, {
    type:'bar',
    data:{ labels, datasets:[{ data, backgroundColor: Array.isArray(color)? color : [color] }]},
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ y:{ grid:{color:'#eee'}} } }
  });
}
function makePie(ctx, labels, data, colors){
  if(!ctx) return null;
  return new Chart(ctx, {
    type:'pie',
    data:{ labels, datasets:[{ data, backgroundColor: colors, borderColor:'#fff', borderWidth:2 }]},
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'top'}} }
  });
}

// Initialize page-specific charts — checks presence before creation
function initCharts(){
  // Dashboard
  makeLine(document.getElementById('cgChart'), ['Jan','Feb','Mar','Apr','May','Jun'], [200,300,450,600,750,900], '#8B0000');
  makeBar(document.getElementById('tvChart'), ['Jan','Feb','Mar','Apr','May','Jun'], [1500,1800,2200,2600,3000,3500], '#8B0000');
  makeLine(document.getElementById('ccChart'), ['Mon','Tue','Wed','Thu','Fri','Sat'], [30,60,50,80,70,90], '#E71228');
  makeBar(document.getElementById('loanChart'), ['Approved','Pending','Rejected'], [120,40,20], ['#5A0606','#E71228','#B30000']);
  makeLine(document.getElementById('revChart'), ['Jan','Feb','Mar','Apr','May','Jun'], [40,60,55,75,85,120], '#5A0606');
  makePie(document.getElementById('pieChart'), ['Savings','Current','Salary'], [60,25,15], ['#8B0000','#E71228','#5A0606']);

  // Customers
  makeLine(document.getElementById('custChart'), ['Jun','Jul','Aug','Sep','Oct','Nov'], [120,150,200,260,300,350], '#B30000');
  makePie(document.getElementById('custPie'), ['Savings','Current','Salary'], [55,30,15], ['#8B0000','#E71228','#5A0606']);

  // Creditcards
  makeLine(document.getElementById('ccApplyChart'), ['Jan','Feb','Mar','Apr','May','Jun'], [50,70,40,85,90,120], '#E71228');
  makePie(document.getElementById('ccPie'), ['Approved','Pending','Rejected'], [65,20,15], ['#5A0606','#E71228','#B30000']);

  // Loans
  makeBar(document.getElementById('loanTypeChart'), ['Home','Car','Personal'], [120,80,60], ['#8B0000','#E71228','#5A0606']);
  makePie(document.getElementById('loanPie'), ['Approved','Pending','Rejected'], [70,20,10], ['#E71228','#5A0606','#B30000']);

  // Transactions
  makeLine(document.getElementById('txnChart'), ['Mon','Tue','Wed','Thu','Fri','Sat'], [300,500,450,650,700,850], '#B30000');
  makePie(document.getElementById('txnPie'), ['UPI','Deposit','Withdrawal'], [40,35,25], ['#E71228','#8B0000','#5A0606']);

  // Reports
  makeBar(document.getElementById('repChart1'), ['2023','2024','2025'], [300,450,600], '#8B0000');
  makeLine(document.getElementById('repChart2'), ['Jan','Feb','Mar'], [100,150,180], '#E71228');
  makePie(document.getElementById('repChart3'), ['Happy','Neutral','Unhappy'], [70,20,10], ['#5A0606','#E71228','#B30000']);
}

// run on load
window.addEventListener('load', () => {
  highlightMenuForPath();
  initCharts();
});
