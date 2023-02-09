let netP=JSON.parse(localStorage.getItem("promocode"));
// document.getElementById("netP").innerText=netP;
let plan=JSON.parse(localStorage.getItem("plan"));
if(netP===500){
    if(plan==="PREMIUM"){
        document.getElementById("netP").innerText="999";
    } else if(plan==="SUPER"){
        document.getElementById("netP").innerText="399";
    } 
} else {
    if(plan==="PREMIUM"){
        document.getElementById("netP").innerText="1499";
    } else if(plan==="SUPER"){
        document.getElementById("netP").innerText="899";
    } else if(plan==="PREMIUM_MONTHLY"){
        document.getElementById("netP").innerText="299";
    }
}

document.querySelector("button").addEventListener("click",()=>{

    let name=document.getElementById("name").value;
    let number=document.getElementById("number").value;
    let exp=document.getElementById("exp").value
    let cvv=document.getElementById("cvv").value;

    if(number.length!=16){
        alert("Invalid Card Number!");
    } else if(cvv.length!=3){
        alert("Invalid CVV");
    } else {
        location.href="../pages/otp.html";
    }
})