
document.getElementById('donate-now-noakhali')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const inputNoakhali = getInputFieldValueById('input-noakhali');
    const myBalance = getTextFieldValueById('my-balance');

    if(inputNoakhali > 0 && inputNoakhali <= myBalance){
      const balanceNoakhali = getTextFieldValueById('balance-noakhali');

      const newBalanceNoakhali = balanceNoakhali + inputNoakhali;
      const newMyBalance = myBalance - inputNoakhali;

      document.getElementById('balance-noakhali').innerText = newBalanceNoakhali;
      document.getElementById('my-balance').innerText = newMyBalance;
    }
    else{
      alert('Will not added your money');
    }
  })