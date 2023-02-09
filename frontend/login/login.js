const login = document.querySelector("#inputbox");
const logged = document.querySelector("#continue2");
const form = document.querySelector("#form");

let arr = [];

var input = document.getElementById("myInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click

    form.style.marginLeft = "-100%";

    // document.getElementById("myBtn").click();
  }
});

function tab3() {
  event.preventDefault();

  var number = document.getElementById("number").value;

  document.getElementById(
    "lastfour"
  ).innerHTML = `${number[6]}${number[7]}${number[8]}${number[9]}`;

  if (number.length <= 9) {
    alert("Please enter a valid number");
  } else if (number.length >= 11) {
    alert("Please enter a valid number");
  } else {
    form.style.marginLeft = "-200%";

    var otp = "";

    var digits = "0123456789";

    var otpLength = 4;

    for (let i = 1; i <= otpLength; i++) {
      var index = Math.floor(Math.random() * digits.length);

      otp = otp + digits[index];
    }

    console.log(otp);
    alert("Your OTP is :- " + otp);

    JSON.stringify(localStorage.setItem("otp", otp));
  }
}

// function updateno(){

//   let number = localStorage.getItem("number") || [];

//     // console.log(number);

// }

// updateno();

function arwnbtn1() {
  event.preventDefault();
  form.style.marginLeft = "0%";
}

function arwnbtn2() {
  event.preventDefault();
  form.style.marginLeft = "-100%";
}

// document.getElementById("signup").addEventListener("click", function () {
//   document.querySelector(".loginbox").classList.add("active");
// });

document.querySelector(".login-link").addEventListener("click", function () {
  document.querySelector(".loginbox").classList.add("active");
});
document.getElementById("xbtn").addEventListener("click", function () {
  document.querySelector(".loginbox").classList.remove("active");
});

function checkotp() {
  event.preventDefault();

  let otp_receive = localStorage.getItem("otp");

  let digit1 = document.getElementById("digit1").value;
  let digit2 = document.getElementById("digit2").value;
  let digit3 = document.getElementById("digit3").value;
  let digit4 = document.getElementById("digit4").value;

  console.log(digit1, digit2, digit3, digit4);

  if (
    otp_receive[0] == digit1 &&
    otp_receive[1] == digit2 &&
    otp_receive[2] == digit3 &&
    otp_receive[3] == digit4
  ) {
    alert("Login Successfull");

    let name = document.getElementById("myInput").value;

    var number = document.getElementById("number").value;
    addDataToDB(name,number);
    console.log("name: " + name);
    
    let data = { name: name, number: number };

    arr.push(data);

    localStorage.setItem("userInfo", JSON.stringify(arr));

    window.location.reload();
  } else {
    alert("Please enter a valid OTP");
  }
}

var el = document.getElementsByClassName("otpbox");
Array.from(el).forEach(function (el) {
  el.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 || el.value.length == 1) {
      // Focus on the next sibling
      el.nextElementSibling.focus();
    }
    if (event.keyCode === 13 || el.value.length == 0) {
      el.previousElementSibling.focus();
    }
  });
});

function checkuser() {
  let dataarray = JSON.parse(localStorage.getItem("userInfo")) || [];

  let loginpara = document.createElement("p");

  loginpara.innerHTML = "Login";

  let logedin_img = document.createElement("img");
  logedin_img.style.width = "35px";
  logedin_img.style.marginBottom = "-12px";
  logedin_img.src =
    "https://www.hotstar.com/assets/c724e71754181298e3f835e46ade0517.svg";

  let divhover = document.createElement("div");

  let myacc = document.createElement("a");

  myacc.innerHTML = "My Account";
  myacc.setAttribute("class", "nav-links3");
  myacc.setAttribute("class", "nav-links-items-seeking");
  let watchlist = document.createElement("a");

  watchlist.innerHTML = "WatchList";
  watchlist.setAttribute("class", "nav-links3");
  watchlist.setAttribute("class", "nav-links-items-seeking");

  let logout = document.createElement("a");

  logout.innerHTML = "Logout";
  logout.setAttribute("class", "nav-links3");
  logout.setAttribute("class", "nav-links-items-seeking");

  divhover.append(myacc, watchlist, logout);

  // console.log(dataarray);

  if (dataarray.length === 0) {
    document.querySelector(".login-link").append(loginpara);
  } else {
    document
      .querySelector(".login-link")
      .addEventListener("click", function () {
        document.querySelector(".loginbox").classList.remove("active");
      });

    document.querySelector(".login-link").append(logedin_img);

    let divhover = document.createElement("div");

    divhover.setAttribute("class", "navlink");

    divhover.innerHTML = ` <a href="./Profile Page/index.html">My Account</a>
                           <a href="./watchlist/watchlist.html">WatchList</a>
                           <a id="logout" href="">Logout</a>`;

    console.log(divhover);

    document.querySelector(".login-link").append(divhover);
  }
}

checkuser();

if (JSON.parse(localStorage.getItem("userInfo"))?.length !== 0) {
  document.getElementById("logout")?.addEventListener("click", data_logout);
}

function data_logout() {
  let datalog = [];

  localStorage.setItem("userInfo", JSON.stringify(datalog));

  window.location.reload();
}

const addDataToDB = async(name, number)=>{
  number =`${number}`
  var result = await fetch('http://localhost:8000/user/',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      mobile: number
    })
  });
  result = await result.json();
  console.log(result);
}