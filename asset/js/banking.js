document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput=document.getElementById('deposit-input');
    const newDepositeAmountText=depositInput.ariaValue;
    const newDepositAmount=parseFloat(newDepositeAmountText);

    const depositTotal=document.getElementById('deposit-total');
    const previousDepositText=depositTotal.innerText;
    const previousDepositAmount=parseFloat(previousDepositText)
    const newDepositTotal=parseFloat(previousDepositAmount+newDepositAmount);
    depositTotal.innertext=newDepositTotal;

    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const preViousBalanceTotal= parseFloat(balanceTotalText);
    const newBalanceTotal=preViousBalanceTotal=newDepositAmount;
    balanceTotal.innertext=newBalanceTotal;

    depositInput.value=''
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawAmountText=withdrawInput.innertext;
    const newWithdrawAmount=parseFloat(withdrawAmountText);

    const withdrawTotal=document.getElementById('withdraw-total');
    const previousWithdrawText=withdrawTotal.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawText);

    const newWithdrawtotal=previousWithdrawTotal+newWithdrawAmount;

    withdrawTotal.innertext=newWithdrawtotal;

    const balanceTotal= document.getElementById('balance-total');
    const preViousBalanceText=balanceTotal.innerText;
    const preViousBalanceTotal=parseFloat(preViousBalanceText);
    const newBalanceTotal=preViousBalanceTotal-newWithdrawAmount;
    balanceTotal.innerText=newBalanceTotal;

    withdrawInput.value='';

})
