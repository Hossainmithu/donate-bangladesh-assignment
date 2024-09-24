document.getElementById('donate-for-noakhali')
  .addEventListener('click', function () {

    const inputDonateForNoakhali = document.getElementById('input-donate-for-noakhali').value;
    const inputDonateForNoakhaliNumber = parseFloat(inputDonateForNoakhali);
    
    const balanceForNoakhali = document.getElementById('balance-for-noakhali').innerText;
    const balanceForNoakhaliNumber = parseFloat(balanceForNoakhali);

    const myBalance = document.getElementById('my-balance').innerText;
    const myBalanceNumber = parseFloat(myBalance);
    
    const finalBalanceForNoakhali = balanceForNoakhaliNumber + inputDonateForNoakhaliNumber;
    const finalMyBalance = myBalanceNumber - inputDonateForNoakhaliNumber;
    
    document.getElementById('balance-for-noakhali').innerText = finalBalanceForNoakhali;
    document.getElementById('my-balance').innerText = finalMyBalance;

  })