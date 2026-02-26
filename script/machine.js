function getValue(id) {
  const value = document.getElementById(id).value;
  return value;
}

function getBalance() {
  const balance = document.getElementById('balance').innerText;
  return Number(balance);
}

function setBalance(value) {
  const balanceElemenet = document.getElementById('balance');
  balanceElemenet.innerText = value;
}

function showOnly(id) {
  const addMoney = document.getElementById('add-money');
  const cashOut = document.getElementById('cashout');
  const transferMoney = document.getElementById('transfer-money');
  const getBonus = document.getElementById('get-bonus');
  const payBill = document.getElementById('pay-bill');
  const transaction = document.getElementById('transaction');

  addMoney.classList.add('hidden');
  cashOut.classList.add('hidden');
  transferMoney.classList.add('hidden');
  getBonus.classList.add('hidden');
  payBill.classList.add('hidden');
  transaction.classList.add('hidden');


  const selected = document.getElementById(id);
  selected.classList.remove('hidden');
}

function date() {
  const now = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return `${days[now.getDay()]} ${months[now.getMonth()]} ${now.getDate()} ${now.getFullYear()} ` +
    `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

function addTransaction(type, ammount, isDebit) {
  const icons = {
    'Add Money': 'assets/opt-1.png',
    'Cash Out': 'assets/opt-2.png',
    'Transfer Money': 'assets/opt-3.png',
    'Bonus': 'assets/opt-4.png',
    'Pay Bill': 'assets/opt-5.png'
  };
  const transaction = document.getElementById('transaction');
  const newTransaction = document.createElement('div');

  newTransaction.innerHTML = `
      <div id="transaction-container" class="flex bg-base-100 w-full border border-stone-200 rounded-2xl flex-row justify-between items-center px-6 py-4 mt-2">
        <div class="flex items-center gap-3">
          <img src="${icons[type]}" alt="" class="bg-[#ededed] rounded-full p-2">
          <div>
            <h2 class=" opacity-75 font-extrabold">${type}</h2>
            <p class="opacity-50 text-sm font-semibold">${date()}</p>
          </div>
        </div>
        <p style="color: ${isDebit ? 'red' : 'green'};">${isDebit ? '-' : '+'} ${ammount} $</p>
      </div>
      `;

  transaction.appendChild(newTransaction);
}
