function cal(){
    var a=parseFloat(document.getElementById("amount").value);
    var b=parseFloat(document.getElementById("discount").value);
    var c=discount(a,b);
    $("#result").html(""+c);
}
function discount(a,b){

  if(a<=0 || b<=0) 
    {

        alert("please enter value.It shouldn't be 0 or negative")
    throw Error("Value shouldn't be 0 or negative value!");  
    }
  if(a=="" && b=="")
    {

        alert("enter value.It shouldn't be a blank ")
         throw Error("Please enter values. It shouldn't be blank!");  
    }
  if(isNaN(a) || isNaN(b))
    {

        alert("enter value.It should be a value ")
     throw Error("Value should be a number!");
    }
    return a*(b/100.0);
}