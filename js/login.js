// step- 1: add click event handler with th submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //  step -2: get the emeail address inside  the email input field
    // always remember to use .value to get text from an inpur field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //  step -3: get password
    // 3.a: set id on the html element
    // 3.b: get the elemnt
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // step-4: veryfy email and passwerd and check wheter valid user or not
    // DENGER: DO NOT VERIFY email passwoed on the client side
    if(email === 'sonato@baap.com' && password === 'secret'){
        window.location.href = 'bank2.html';
    }
    else{
         alert('invalid user')
    }

})