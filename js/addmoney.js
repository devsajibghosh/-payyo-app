// addmoney--js --- working ---- here

document.getElementById('add-money-btn').addEventListener('click',function(event){
  event.preventDefault();

  // input value added

  const addInputValue = getInputValue('add-money-input');
  const inputValueNum = parseFloat(addInputValue);
  // check the value true : Number
  if(isNaN(inputValueNum)){
    alert('provide number only')
  }
  const inputPassword = getInputValue('add-pin-input');

  if(inputPassword === '1234'){
    const accBalance = getInnerText('main-acc-balance');
    const mainBalance = parseFloat(accBalance) + inputValueNum;
    document.getElementById('main-acc-balance').innerText = mainBalance;

    // transaction record

    const div = document.createElement('div');
    div.classList.add('bg-red-500','p-3','mb-2','rounded-xl');
    div.innerHTML = `
    <h4 class="text-black text-xl font-bold">Add Money:</h4>
    <p>${inputValueNum}TK Add Money. New Balance: ${mainBalance} Tk</p>
    `
    document.getElementById('transaction-history').appendChild(div);

  }else{
    alert('Failed Add Money!')
  }



})

