document.getElementById('login-btn')
.addEventListener('click', () => {
  const inputNumber = document.getElementById('input-number');
  const number = inputNumber.value;
  const inputPin = document.getElementById('input-pin');
  const pin = inputPin.value;

  if (number === '00000000000' && pin === '0000') {
    window.location.assign("home.html");
  } else  {
    alert('login failed.');
    return;
  }
});