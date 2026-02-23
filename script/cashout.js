document.getElementById('cashout-btn')
.addEventListener('click', () => {

  const agentNumber = getValue('cashout-number');

  if (agentNumber.length !== 11) {
    alert('invalid number');
    return;
  }
  
  const cashoutAmmount = getValue('cashout-amount');
  const currentBalance = getBalance();
  const newBalance = currentBalance - Number(cashoutAmmount);

  if (newBalance < 0) {
    alert('insufficient balance');
    return;
  }

  const cashoutPin = getValue('cashout-pin');

  if (cashoutPin === '0000') {
    alert('cashout successful.');
    setBalance(newBalance);
  } else {
    alert('wrong pin');
    return;
  }

});