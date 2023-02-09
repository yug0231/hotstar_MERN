
let givenOtp=Math.floor(Math.random()*10000);
setTime("Your OTP is " + givenOtp*1 ,2000)

document.querySelector("button").addEventListener("click",()=>{

    let myOtp=document.getElementById("otp").value;
    if(givenOtp!=myOtp){
        alert("Wrong OTP!");
    } else {
        // setTime("Payment Successfull",2000);
        alert("Payment Successfull")
        location.href="../pages/paySuccess.html";
    }
})

function setTime(msg,delay){
    setTimeout(() => {
        alert(msg)
    }, delay);
}
// location.href="../index.html";