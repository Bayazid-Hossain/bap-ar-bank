 /* 
 1. add event handler with the withdraw button
 2. get the withdraw amount input field
 2.5. also make sure to convert the input into a number by using parsFloat
 3.get previous withdraw total
 4.calculate total witdraw amount
 4.5.set total withdraw amount
 5.get the previous balance total
 6.calculate new balance total
 6.5.set the new balance total
 7.clear the input field
 */
// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    console.log('withdraw button clicked');
    // step-2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
     

    // step-7:
    withdrawField.value = '';


    if(isNaN(newWithDrawAmount)){
        alert('Please provide a valid Nurmber')
        return;
    }
    //  step-3: 
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
   
    // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    
    if(newWithDrawAmount > previousBalanceTotal){
        alert('Baaper Bank a atoo taka nai');
        return;
    }
     // step-4:
     const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
     WithdrawTotalElement.innerText = currentWithdrawTotal;
    //  step_6:
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    



})