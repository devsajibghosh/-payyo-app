// login user form

document.getElementById('login-btn').addEventListener('click',function(event){
  event.preventDefault();

  // how to access to the main form

  const inputPhone = getInputValue('login-phone');
  const inputPass = getInputValue('login-password');
  
  if(parseFloat(inputPass) === 1234 && inputPhone){
    alert('you are login');
    window.location.href = "/home.html";
  }
  else{
    alert('Failed to Login! try again')
  }


})