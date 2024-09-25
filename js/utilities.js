
function getInputFieldValueById(id){
  const input = document.getElementById(id).value;
  const inputNumber = parseFloat(input);

  return inputNumber;

}


function getTextFieldValueById(id){
  const balance = document.getElementById(id).innerText;
  const balanceNumber = parseFloat(balance);

  return balanceNumber;

}


function showSectionById(id){
  document.getElementById('donation-section').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}