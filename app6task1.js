function doSquare(){
    let a=document.getElementById("num1").value
    let b=document.getElementById("num2").value
    let square=(a*a)+(b*b)+2*a*b
    document.getElementById("div1").innerHTML=square
   
   }