const BillAmount=document.querySelector("#bill-amount");
const CashGiven=document.querySelector("#cash-given");
const nextBtn=document.querySelector("#next-Btn");
const CheckButton=document.querySelector("#check-btn");

const errormessage=document.querySelector("#error-message");

const cashgivenDiv=document.querySelector("#cash-given");
const ChangeTable =document.querySelector("#change-table");


const output=document.querySelector(".output");
const NoOfNotes=document.querySelectorAll(".no-of-notes");

const availableNotes=[2000,500,200,20,10,5,1];
function hidemessage()
{
    errormessage.style.display="none";
}
function showMessage(msg)
{
    errormessage.style.display="block";
    errormessage.innerText=msg;
    
}
function clearTable()
{
    for(let note of NoOfNotes)
    {
        note.innerText="";
    }
}
function calculateRtn(bill,cash)
{
    let amountToBeReturned= cash-bill;
    if(amountToBeReturned<1)
    {
        showMessage("No Amount to return ");
        return;   
    }
    for(let i=0;i<availableNotes.length;i++)
    {
        amountToBeReturned=calculateChange(amountToBeReturned,availableNotes[i],i);
    }
}
function calculateChange(remainingAmt,noteValue,index)
{
    if(remainingAmt>=noteValue)
    {
        let numberOfNotes= Math.trunc(remainingAmt/noteValue);
        remainingAmt=remainingAmt-numberOfNotes*noteValue;
        NoOfNotes[index].innerText=`${numberOfNotes}`;
        console.log(numberOfNotes);
    }    
    return remainingAmt;
    
}
nextBtn.addEventListener('click',()=>{
    hidemessage();
    if(Number(billAmt.value)>0)
    {
        nextBtn.style.display="none";
        cashgivenDiv.style.display="block";

    }
    else
    {
        showError("Enter Valid Bill Amount");
    }
})
CheckButton.addEventListener("click",()=>{

    clearTable();
    hidemessage();
    let bill=Number(BillAmount.value);
    let cash=Number(CashGiven.value);

    if(bill>0 && cash>0)
    {
        if(bill>cash)
        {
            showMessage("The cash provided should be atleast Equal to the bill amount");
            return;
        }
        if(cash>bill)
        {
            calculateRtn(bill,cash);
        }
        else
        {
            showMessage("Invalid Bill Amount");
        }
    }
    }
    )