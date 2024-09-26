
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

      // add to history 
      const date = new Date();

      const div = document.createElement('div');
      div.classList.add('border-dotted');
      div.innerHTML = `
      <div class="border-dotted border-2 border-b-neutral-700 p-10 rounded-lg">
        <p class="font-bold">${inputQuota} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh.
        </p>
          <br>
        ${date}
      </div>`

      document.getElementById('history-container').appendChild(div);
      console.log(div);

      alert('Congrates ! You have donated your mankind.');
    }
    else {
      alert('Invalid request to donate.');
    }
  })