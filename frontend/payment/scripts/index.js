document.getElementById("toPay").addEventListener("click",()=>{
    location.href="./pages/checkout.html";
})


let netP=JSON.parse(localStorage.getItem("promocode"));
console.log(netP);
// document.getElementById("netP").innerText=netP;
let plan=JSON.parse(localStorage.getItem("plan"));

console.log(plan);


if(netP===500){
    if(plan==="PREMIUM"){
        document.getElementById("netP").innerHTML="999";
    } else if(plan==="SUPER"){
        document.getElementById("netP").innerHTML="399";
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

