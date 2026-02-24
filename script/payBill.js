document.getElementById('pay-bill-btn')
  .addEventListener('click', () => {
    console.log('as');
    const billAccNumber = getValue('biller-account-number');
    if (billAccNumber.length !== 11) {
      alert('invalid number');
      return;
    }

    const ammount = getValue('bill-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance - ammount;
    if (ammount > currentBalance) {
      alert('insufficient balance');
      return;
    } else if (!ammount || ammount < 0) {
      alert('invalid ammount');
      return;
    }

    const pin = getValue('bill-pin');
    if (pin === '0000') {
      alert('bill pay successful.');
      setBalance(newBalance);
    } else {
      alert('wrong pin');
      return;
    }
  });