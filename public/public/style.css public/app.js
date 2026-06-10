async function fetchAPI(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  const text = await res.text();
  try { return JSON.parse(text); } catch { return text; }
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
  if (sectionId === 'dashboard') loadDashboard();
  if (sectionId === 'pos') loadPos();
  if (sectionId === 'inventory') loadInventory();
  if (sectionId === 'customers') loadCustomers();
  if (sectionId === 'employees') loadEmployees();
  if (sectionId === 'accounting') loadAccounting();
  if (sectionId === 'reports') loadReports();
}

async function loadDashboard() {
  document.getElementById('dashboard').innerHTML = `
    <div class="card">
      <h3>مرحباً بك في النظام</h3>
      <p>أنت على لوحة القيادة</p>
    </div>
  `;
}

async function loadPos() {
  document.getElementById('pos').innerHTML = `
    <div class="card">
      <h3>نقطة البيع</h3>
      <p>قريبًا</p>
    </div>
  `;
}

async function loadInventory() {
  document.getElementById('inventory').innerHTML = `
    <div class="card">
      <h3>المخزون</h3>
      <p>قريبًا</p>
    </div>
  `;
}

async function loadCustomers() {
  document.getElementById('customers').innerHTML = `
    <div class="card">
      <h3>العملاء</h3>
      <p>قريبًا</p>
    </div>
  `;
}

async function loadEmployees() {
  document.getElementById('employees').innerHTML = `
    <div class="card">
      <h3>الموظفين</h3>
      <p>قريبًا</p>
    </div>
  `;
}

async function loadAccounting() {
  document.getElementById('accounting').innerHTML = `
    <div class="card">
      <h3>المحاسبة</h3>
      <p>قريبًا</p>
    </div>
  `;
}

async function loadReports() {
  document.getElementById('reports').innerHTML = `
    <div class="card">
      <h3>التقارير</h3>
      <p>قريبًا</p>
    </div>
  `;
}

showSection('dashboard');
