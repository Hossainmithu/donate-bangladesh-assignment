
document.getElementById('donate-now-feni')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const inputFeni = getInputFieldValueById('input-feni');
    const myBalance = getTextFieldValueById('my-balance');

    if(inputFeni > 0 && inputFeni <=myBalance){
      const balanceFeni = getTextFieldValueById('balance-feni');

      const newBalanceFeni = balanceFeni + inputFeni;
      const newMyBalance = myBalance - inputFeni;

      document.getElementById('balance-feni').innerText = newBalanceFeni;
      document.getElementById('my-balance').innerText = newMyBalance;
    }
    else{
      alert('Will not added your money');
    }
  })