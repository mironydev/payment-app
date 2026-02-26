document.getElementById('coupon-btn')
  .addEventListener('click', () => {
    const coupon = getValue('coupon');
    const ammount = 10;
    if (coupon === 'bonus') {
      const currentBalance = getBalance();
      const newBalance = currentBalance + 10;
      alert('bonus availed! (+10$)')
      setBalance(newBalance);
      addTransaction('Bonus', ammount, false);
      return;
    } else {
      alert('invalid coupon.');
      return;
    }
  });