
document.getElementById('donate-now-quota')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const inputQuota = getInputFieldValueById('input-quota');
    const myBalance = getTextFieldValueById('my-balance');


    
    if (inputQuota > 0 && inputQuota <= myBalance) {
      const balanceQuota = getTextFieldValueById('balance-quota');
      
      
      const newBalanceQuota = balanceQuota + inputQuota;
      const newMyBalance = myBalance - inputQuota;
      
      // console.log(inputQuota, newMyBalance, newBalanceQuota);

      document.getElementById('balance-quota').innerText = newBalanceQuota;
      document.getElementById('my-balance').innerText = newMyBalance;
    }
    else {
      alert('Will not added your money');
    }
  })