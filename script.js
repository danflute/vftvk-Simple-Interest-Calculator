function compute()
{
    //create variable and assign value
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //calculate interest
    var interest = principal * years * rate /100;
    
    //No of Years conversion
    var year = new Date().getFullYear()+parseInt(years);
    
    //set innerHTML for var result
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

//reads value of range slider and displays
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
