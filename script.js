const BillAmount=document.querySelector("#bill-amount");
const CashGiven=document.querySelector("#cash-given");
const CheckButton=document.querySelector("#check-btn");
const message=document.querySelector("#error-message");
const availableNotes=[2000,500,200,20,10,5,1];
const NoOfNotes=document.querySelectorAll(".no-of-notes");
function hidemessage()
{
    message.style.display="none";
}
function calculateChange(amountToBeReturned)
{
    for(let i=0;i<availableNotes.length;i++)
    {
        const numberOfNotes= Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        NoOfNotes[i].innerText = numberOfNotes;
    }
}
function showMessage(msg)
{
    message.style.display="block";
    message.innerText=msg;
}
CheckButton.addEventListener("click",function validateBillAndCashAmount()
{
    hidemessage();
    if(BillAmount.value > 0)
    {
        if(CashGiven.value>=BillAmount.value)
        {
            const amountToBeReturned=CashGiven.value - BillAmount.value;
            calculateChange(amountToBeReturned);
        }
        else
        {
           showMessage("The cash provided should be atleast Equal to the bill amount");
        }
    }
    else
    {
        showMessage("Invalid Bill Amount");
    }
}
);