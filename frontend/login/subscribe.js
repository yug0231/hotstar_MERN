let select = "";

function super_btn() {
  document.getElementById("select").innerHTML = null;

  document.getElementById("plan_content1").style.backgroundColor = "#1F80E0";
  document.getElementById("super").style.backgroundColor = "#1F80E0";
  document.getElementById("super").style.color = "#FEDF7B";
  document.getElementById("plan_content2").style.backgroundColor = "#111826";
  document.getElementById("premium").style.backgroundColor = "#111826";
  document.getElementById("premium").style.color = "white";

  select = document.getElementById("select").innerHTML = "SUPER";
}

function premium_btn() {
  document.getElementById("select").innerHTML = null;

  document.getElementById("plan_content2").style.backgroundColor = "#1F80E0";
  document.getElementById("premium").style.backgroundColor = "#1F80E0";
  document.getElementById("premium").style.color = "#FEDF7B";
  document.getElementById("plan_content1").style.backgroundColor = "#111826";
  document.getElementById("super").style.backgroundColor = "#111826";
  select = document.getElementById("select").innerHTML = "PREMIUM";
  document.getElementById("super").style.color = "white";
}

function premium_monthly() {
  document.getElementById("select").innerHTML = null;

  document.getElementById("plan_content2").style.backgroundColor = "#1F80E0";
  document.getElementById("premium").style.backgroundColor = "#1F80E0";
  document.getElementById("plan_content1").style.backgroundColor = "#111826";
  document.getElementById("super").style.backgroundColor = "#111826";

  select = document.getElementById("select").innerHTML = "PREMIUM_MONTHLY";
}

document.getElementById("submit").addEventListener("click", promo);

function promo() {
  let code = document.getElementById("promo").value;

  console.log(code);

  if (code == "MASAI500") {
    alert("Congratulations Code Applied");
    localStorage.setItem("promocode", 500);
    localStorage.setItem("plan", JSON.stringify(select));
    window.location.href = "../payment/mainPagePayment.html";
  } else if (code === "") {
    localStorage.setItem("promocode", 0);
    localStorage.setItem("plan", JSON.stringify(select));
    window.location.href = "../payment/mainPagePayment.html";
  } else {
    alert("Invalid Promo Code");
    localStorage.setItem("promocode", 0);
    localStorage.setItem("plan", JSON.stringify(select));
  }
}

function mobile() {
  let numberdata = JSON.parse(localStorage.getItem("userInfo")) || [];

  numberdata.map(function (el) {
    document.getElementById("number").innerHTML = el.number;

    document.getElementById("mobile_number_input").innerHTML = el.number;
  });
}

mobile();
