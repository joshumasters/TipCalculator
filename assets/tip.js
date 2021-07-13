let submit = document.getElementById("submit")
let tipAmount = document.getElementById("tipAmount")

submit.addEventListener('click', results)

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

function results(){
    console.log("in")
    let amount = document.getElementById("billAmount").value;
    let guests = document.getElementById("guests").value
    let tipPer = document.getElementById("tipPercent").value.replace('%', '')
    let tip = amount * (tipPer * 0.01) / guests
    tipAmount.innerHTML = "The tip is " + formatter.format(tip) + " per guest"

}