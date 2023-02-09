
function get_data() {
    
    let data =JSON.parse(localStorage.getItem("userInfo")) ||[];

data.map(function(el){

  let name=el.name;

  let number = el.number;



  document.getElementById("username").innerHTML=name;
  document.getElementById("usernumber").innerHTML=number;




})

}

get_data();

