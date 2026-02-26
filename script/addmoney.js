document.getElementById('add-money-btn')
  .addEventListener('click', () => {

    const bankName = getValue('add-money-bank');
    if (bankName === "Select Bank") {
      alert('please select a bank');
      return;
    }

    const accountNumber = getValue('bank-account-number');
    if (accountNumber.length !== 11) {
      alert('invalid account number');
      return;
    }

    const ammount = getValue('add-money-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(ammount);

    const addMoneyPin = getValue('add-money-pin');

    if (addMoneyPin === '0000') {
      alert(`add money successful`);
      setBalance(newBalance);

      addTransaction('Add Money', ammount, false);

    } else {
      alert('wrong pin');
      return;
    }
  });