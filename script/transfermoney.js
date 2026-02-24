document.getElementById('transfer-btn')
  .addEventListener('click', () => {
    const userAccNumber = getValue('user-account-number');
    if (userAccNumber.length !== 11) {
      alert('invalid number');
      return;
    }

    const ammount = getValue('transfer-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance - ammount;
    if (ammount > currentBalance) {
      alert('insufficient balance');
      return;
    } else if (!ammount) {
      alert('invalid ammount');
      return;
    } else if (ammount < 10) {
      alert('failed. minimum 10$');
      return;
    }

    const pin = getValue('transfer-pin');
    if (pin === '0000') {
      alert('transfer successful.');
      setBalance(newBalance);
    } else {
      alert('wrong pin');
      return;
    }

  });