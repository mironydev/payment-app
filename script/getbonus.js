document.getElementById('coupon-btn')
  .addEventListener('click', () => {
    const coupon = getValue('coupon');
    if (coupon === 'bonus') {
      const currentBalance = getBalance();
      const newBalance = currentBalance + 10;
      alert('bonus availed! (+10$)')
      setBalance(newBalance);
      return;
    } else {
      alert('invalid coupon.');
      return;
    }
  });