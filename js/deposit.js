//  1.step-1: add event listener to the deposit button
 document.getElementById('btn-deopsit').addEventListener('click', function(){
    //  step-2: get the deposit amount from the deposit input field
    // For field use .value to the the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    

        // step-7: clear the deposit field
        depositField.value = '';

    if(isNaN(depositAmount)){
      alert('Please provide a valid Nurmber')
      return;
     
    // step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innerText tot get the text
       const deopsitTotalElement = document.getElementById('deposit-total');
       const previousDeopsitTotalString = deopsitTotalElement.innerText;
       const previousDeopsitTotal = parseFloat(previousDeopsitTotalString);
        
    //    step-4: add numbers to set the total deposit

       const currentDepositTotal = previousDeopsitTotal + newDepositAmount;
      // set the deposit total
        deopsitTotalElement.innerText =  currentDepositTotal;
    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
   // set thr balance total
   balanceTotalElement.innerText = currentBalanceTotal;



 })