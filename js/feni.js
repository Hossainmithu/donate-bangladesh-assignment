
document.getElementById('donate-now-feni')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const inputFeni = getInputFieldValueById('input-feni');
    const myBalance = getTextFieldValueById('my-balance');

    if (inputFeni > 0 && inputFeni <= myBalance) {
      const balanceFeni = getTextFieldValueById('balance-feni');

      const newBalanceFeni = balanceFeni + inputFeni;
      const newMyBalance = myBalance - inputFeni;

      document.getElementById('balance-feni').innerText = newBalanceFeni;
      document.getElementById('my-balance').innerText = newMyBalance;

      const date = new Date();
      // console.log(date);

      // add to history 
      const div = document.createElement('div');
      div.classList.add('border-dotted');
      div.innerHTML = `
      <div class="border-dotted border-2 border-b-neutral-700 p-10 rounded-lg">
        <p class="font-bold">${inputFeni} Taka is Donated for Flood at Feni, Bangladesh.
        </p>
        <br>
        ${date}
      </div>`
        
        document.getElementById('history-container').appendChild(div);
        // console.log(div);

        alert('Congrates ! You have donated your mankind.');
    }
    else {
      alert('Invalid request to donate.');
    }
  })