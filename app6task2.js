function roi(){
    let p=document.getElementById("num1").value
    let t=document.getElementById("num2").value
    let r=document.getElementById("num3").value
    let SI=(p*t*r)/100
    document.getElementById("div1").innerHTML=SI
}