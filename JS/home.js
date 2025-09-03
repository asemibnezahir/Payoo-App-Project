// handling Log Out
document.getElementById('log-out').addEventListener('click',function(e){
    window.location.href = './index.html';
})

// Shared Function
function displayORNot(secName)
{
    const cards = document.getElementsByClassName('menu-sections');
    for(let card of cards)
    {
        card.classList.add('hidden');
        card.classList.remove('block');
    }

    document.getElementById(secName).classList.remove('hidden');
    document.getElementById(secName).classList.add('block');
}

// Menu Clicking Interactions Optimized
document.getElementById('money-adding-menu').addEventListener('click',function(){displayORNot('add_money');})

document.getElementById('cashout-menu').addEventListener('click',function(){displayORNot('cash-out');})

document.getElementById('transfer-menu').addEventListener('click',function(){displayORNot('transfer');})

document.getElementById('bonus-menu').addEventListener('click',function(){displayORNot('bonus');})

document.getElementById('pay-bill-menu').addEventListener('click',function(){displayORNot('pay-bill');})

document.getElementById('transaction-history-menu').addEventListener('click',function(){displayORNot('transaction-history');})








// Transaction History Adding Feature 
const transactionData =[];







    // Add Money Section After Click
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

            // for History
            const data ={
                ima: document.getElementById('service-icon1').outerHTML,
                Name: 'Add Money',
                timeNow: new Date().toLocaleTimeString()
            }
            transactionData.push(data);
        }
    }
    else
    {
        alert('Something went wrong, Try Again Later');
    }
})












// Cash Out Section After Click
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

            // for History
            const data ={
                ima: document.getElementById('service-icon2').outerHTML,
                Name: 'Cash Out',
                timeNow: new Date().toLocaleTimeString()
            }
            transactionData.push(data);
        }
    })










// Transfer Money Section After Click
    document.getElementById("transfer-btn").addEventListener('click',function(e){
        e.preventDefault();
        const amountOnAccount = document.getElementById('stored-amount').innerText;
        const myPinNumber ='1747';

        const enteredUserNumber = document.getElementById('user-number').value;
        const transferAmount = document.getElementById('transfer-amount').value;
        const enteredPinNumber = document.getElementById('bank-pin-transfer').value;
        if(enteredUserNumber.length!==11)
        {
            alert('Please Enter a Valid User number');
        }
        else if(isNaN(parseInt(transferAmount))===true || parseInt(transferAmount)<=0)
        {
            alert('Please Enter a valid amount');
        }
        else if(parseInt(transferAmount)>parseInt(amountOnAccount))
        {
            alert('Insufficient Balance');
        }
        else if(enteredPinNumber!==myPinNumber)
        {
            alert('Incorrect Pin Number');
        }
        else
        {
            const finalAmount = parseInt(amountOnAccount)-parseInt(transferAmount);
            document.getElementById('stored-amount').innerText=finalAmount;

            // for History
            const data ={
                ima: document.getElementById('service-icon3').outerHTML,
                Name: 'Transfer Money',
                timeNow: new Date().toLocaleTimeString()
            }
            transactionData.push(data);
        }
    })








// Get Bonus Section
{
    document.getElementById("bonus-btn").addEventListener('click',function(e){
        e.preventDefault();
        const amountNumberOnAccount = parseInt(document.getElementById('stored-amount').innerText);
        const realCoupon = '1A58H6D4';
        const enteredCode = document.getElementById('bonus-coupon').value;
        if(enteredCode===realCoupon)
        {
            alert('Congratulations, You have got $1000 Bonus');
            const finalAmount = amountNumberOnAccount + 1000;
            document.getElementById('stored-amount').innerText = finalAmount;
            // for History
            const data ={
                ima: document.getElementById('service-icon4').outerHTML,
                Name: 'Bonus',
                timeNow: new Date().toLocaleTimeString()
            }
            transactionData.push(data);
        }
        else
        {
            alert('Sorry! This coupon is not available');
        }
    })
}












// Pay Bill Section After Click
    document.getElementById("bill-btn").addEventListener('click',function(event){
    event.preventDefault();

    const amountOnAccount = document.getElementById('stored-amount').innerText;
    const myPinNumber ='1747';

    const selectBillType = document.getElementById('Add-Select').value;
    const billarAccountNumber = document.getElementById('billar-acc-number').value;
    const pinNumber = document.getElementById('bank-pin-for-bill').value;
    const billAmount = document.getElementById('bill-amount').value;

    if(billarAccountNumber.length!==11)
    {
        alert('Please Enter a Valid User number');
    }
    else if(selectBillType==="a")
    {
        alert('Please Select the Bill Type First');
    }
    else if(pinNumber!==myPinNumber)
    {
        alert('Incorrect PIN Number');
    }
    else if(isNaN(parseInt(billAmount))===true || parseInt(billAmount)<=0)
    {
        alert('Please Enter a valid amount');
    }
    else if(parseInt(billAmount)>parseInt(amountOnAccount))
    {
        alert('Insufficient Balance');
    }
    else
    {
        const finalMoney = parseInt(amountOnAccount) - parseInt(billAmount);
        document.getElementById('stored-amount').innerText = finalMoney;
        alert('Your' + selectBillType + ' Payment $' + billAmount + ' is successful. Current Balance is $' + finalMoney);
        // for History
        const data ={ 
            ima: document.getElementById('service-icon5').outerHTML,
            Name: selectBillType,
            timeNow: new Date().toLocaleTimeString(),
        }
        transactionData.push(data);
    }
})



// Completing the history adding
    document.getElementById('transaction-history-menu').addEventListener('click',function(ev){
    ev.preventDefault();
    const cardContainer = document.getElementById('history-card-container');
    cardContainer.innerHTML = "";
    for(let i=transactionData.length-1;i>=0;i--)
    {
        const data = transactionData[i];
        const historyDiv = document.createElement('div');
        historyDiv.classList.add('history-card-in-js');
        historyDiv.innerHTML = `
            <div class="transraction-logo-balance flex gap-1">
                <div class="transraction-logo w-[3rem] h-[3rem] bg-[#0808080d] flex justify-center items-center rounded-[50%]">
                    ${data.ima}
                </div>
                <div class="bill">
                    <h1 class="bill-type text-[16px] font-semibold text-[#080808b3]">${data.Name}</h1>
                    <p class="bill-time text-[#080808b3] text-[12px]">${data.timeNow}</p>
                </div>
            </div>
            <div class="tree-dot">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            `
        cardContainer.appendChild(historyDiv);
    }
})