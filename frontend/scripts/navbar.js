/* <div class="right">
            <div id="ash">
                <input type="text" placeholder="Search" class="input">
                <i class="material-icons"> search</i>
                <div class="search-drop">
                    <li>yo yo</li>
                    <li>honey</li>
                    <li>singh</li>
                    <li>himangshu boakchoda</li>
        
                </div>
    

            </div>
            <button class="sub">Subscribe</button>
            <button class="log">LOGIN</button>
        </div> */

//   const input=document.querySelector(".input").value
const suggestion = document.querySelector(".search-drop").value;
const maindiv = document.querySelector("#ash").value;

const url = "https://abhishek6416.github.io/hotstarapii/db.json";

async function display(url) {
  try {
    const input = document.querySelector(".input").value;
    const a1 = await fetch(url);
    const a2 = await a1.json();
    // display1(a2.moviedata.trending)
    console.log(a2.moviedata);
    // input.onkeyup=(el)=>{
    //     alert("yoyo")

    //     console.log(el.target.value)

    // }
    input.onkeyup = (el) => {
      let elem = el.target.value;
      console.log(el);
      let array = a2.moviedata.movies;

      if (el.target.value) {
        console.log(elem);
        array.filter((el) => {
          if (el.title[0].toLowerCase() === elem) {
            console.log(el);
          }
          // console.log(el)
          // return el;
        });
      }
    };
    //    fun(a2.moviedata)
  } catch (error) {}
}
display(url);

//   document.querySelector(".input").addEventListener("keyup",fun)

//   function fun(data){
//     //  console.log("arr",data)
// //    const input=document.querySelector(".input").value
// //    console.log(data)
//     let elem=event.target.value;
//     let array=data.movies

//     console.log(elem);
//     // alert("yo yo")
//   }
