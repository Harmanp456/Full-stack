let balance = 1000;

function deposit() {
  const amt = Number(document.getElementById('amount').value) || 0;
  if (amt <= 0) return;
  balance += amt;
  document.getElementById('balance').textContent = balance;
}

function withdraw() {
  const amt = Number(document.getElementById('amount').value) || 0;
  if (amt <= 0) return;
  if (amt > balance) { alert('Insufficient funds'); return; }
  balance -= amt;
  document.getElementById('balance').textContent = balance;
}