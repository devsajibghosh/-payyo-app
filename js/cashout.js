// cashout working here

document.getElementById('cash-out-btn').addEventListener('click',function(event){
  event.preventDefault();

  const cashOutAmount = getInputValue('cashout-input');
  const cashOut = parseFloat(cashOutAmount);
  // check it's a number 
  if(isNaN(cashOut)){
    alert('provide number')
  }
  const cashOutPin = getInputValue('cash-pin-input');
  const currentBalance = getInnerText('main-acc-balance');
  const mainBalance = parseFloat(currentBalance);

  if(cashOutPin === '1234'){
    const newBalance = mainBalance - cashOut;
    if(cashOut > mainBalance){
      //! sweet alret
      const Toast = Swal.mixin({
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "warning",
        title: "You have no money",
        background: "red",
      });
      return;
    }
    document.getElementById('main-acc-balance').innerText = newBalance;

    // create a new element and applend child

    const div = document.createElement('div');
    div.classList.add('bg-orange-400','p-3','mb-2','rounded-xl');
    div.innerHTML = `
    <h4 class="text-white text-xl font-bold">Cash Out:</h4>
    <p>${cashOut}TK Cash Out. New Balance: ${newBalance} Tk</p>
    `
    document.getElementById('transaction-history').appendChild(div);


  }






})