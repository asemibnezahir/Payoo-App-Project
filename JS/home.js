document.getElementById('money-adding-menu').addEventListener('click',function(){
    document.getElementById('add_money').style.display='block';
    document.getElementById('cash-out').style.display='none';

})

document.getElementById('cashout-menu').addEventListener('click',function(){
    document.getElementById('cash-out').style.display='block';
    document.getElementById('add_money').style.display='none';
})


if(window.getComputedStyle(document.getElementById('add_money')).display!=='none')
{
    document.getElementById("add-submit").addEventListener('click',function(event){
    event.preventDefault();
    const myAccountNumber = '01788943691';
    const myPinNumber ='1747';

    const selectBank = document.getElementById('Add-Select').value;
    const accountNumber = document.getElementById('ACC-number').value;
    const previousMoney = document.getElementById('stored-amount').innerText;
    const pinNumber = document.getElementById('bank-pin').value;
    if(myAccountNumber!==accountNumber||myPinNumber!==pinNumber)
    {
        alert('Incorrect Bank Account Number or PIN');
    }
    else if(selectBank==="")
    {
        alert('Please Select the Bank First');
    }
    else if(myAccountNumber===accountNumber&&myPinNumber===pinNumber&&selectBank!=='')
    { 
        const savedMoney = parseInt(previousMoney);
        const addedMoney = parseInt(document.getElementById('Add-Amount').value);
        if(isNaN(addedMoney)===true)
        {
            alert('Please Enter the Amount you want to add');
        } 
        else{
            const finalMoney = savedMoney + addedMoney;
            document.getElementById('stored-amount').innerText = finalMoney;
        }
    }
    else
    {
        alert('Something went wrong, Try Again Later');
    }
})
}


else if(window.getComputedStyle(document.getElementById('cash-out')).display==='none'){
    document.getElementById("withdraw-btn").addEventListener('click',function(e){
        e.preventDefault();
        const amountOnAccount = document.getElementById('stored-amount').innerText;
        const myPinNumber ='1747';

        const enteredAgentNumber = document.getElementById('agent-number').value;
        const withdrawalAmount = document.getElementById('out-amount').value;
        const enteredPinNumber = document.getElementById('bank-pin-w').value;
        if(enteredAgentNumber.length!==11)
        {
            alert('Please Enter a Valid Agent number');
        }
        else if(isNaN(parseInt(withdrawalAmount))===true || parseInt(withdrawalAmount)<=0)
        {
            alert('Please Enter a valid amount');
        }
        else if(parseInt(withdrawalAmount)>parseInt(amountOnAccount))
        {
            alert('Insufficient Balance');
        }
        else if(enteredPinNumber!==myPinNumber)
        {
            alert('Incorrect Pin Number');
        }
        else
        {
            const finalAmount = parseInt(amountOnAccount)-parseInt(withdrawalAmount);
            document.getElementById('stored-amount').innerText=finalAmount;
        }
    })
}