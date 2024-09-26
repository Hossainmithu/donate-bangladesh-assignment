
document.getElementById('donate-now-noakhali')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const inputNoakhali = getInputFieldValueById('input-noakhali');
    const myBalance = getTextFieldValueById('my-balance');

    if (inputNoakhali > 0 && inputNoakhali <= myBalance) {
      const balanceNoakhali = getTextFieldValueById('balance-noakhali');

      const newBalanceNoakhali = balanceNoakhali + inputNoakhali;
      const newMyBalance = myBalance - inputNoakhali;

      document.getElementById('balance-noakhali').innerText = newBalanceNoakhali;
      document.getElementById('my-balance').innerText = newMyBalance;
      
      // < !--Open the modal using ID.showModal() method-- >
      // <button class="btn" onclick="my_modal_2.showModal()">open modal</button>
      // <dialog id="my_modal_2" class="modal">
      //    <div class="modal-box">
      //       <h3 class="text-lg font-bold">Hello!</h3>
      //       <p class="py-4">Press ESC key or click outside to close</p>
      //    </div>
      //     <form method="dialog" class="modal-backdrop">
      //     <button>close</button>
      //     </form>
      // </dialog>

      const date = new Date();

      const div = document.createElement('div');
      div.classList.add('border-dotted');
      div.innerHTML = `
      <div class="border-dotted border-2 border-b-neutral-700 p-10 rounded-lg">
        <p class="font-bold">${inputNoakhali} Taka is Donated for Flood at Noakhali, Bangladesh.
        </p>
         <br>
        ${date}
      </div>`
      document.getElementById('history-container').appendChild(div);

      alert('Congrates ! You have donated your mankind.');

    }
    else {
      alert('Invalid request to donate.');
    }
  })