// utilities for js ------- :

//! id collection password::::::::

function getInputValue(id){
  const getId = document.getElementById(id).value;
  return getId;
}

// changing the text---value
function getInnerText(id){
  const getId = document.getElementById(id).innerText;
  return getId;
}

// funtion apply to the hide and show

function showSectionById(id){
  document.getElementById('addmoney-form').classList.add('hidden');
  document.getElementById('cashout-form').classList.add('hidden');
  document.getElementById('transaction-history').classList.add('hidden');
  // show the form with id
  document.getElementById(id).classList.remove('hidden');
}
