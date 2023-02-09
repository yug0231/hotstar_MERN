// import addFooter from "../Footer/footer.js";
import {addNavbar} from '../NAVBARFINAL/navbar.js'

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToWatch() {
  const img_url = "https://image.tmdb.org/t/p/w200";

  wishlist.map((elem, index) => {
    const watch2 = document.createElement("div");
    watch2.setAttribute("class", "card");

    const watch = document.createElement("div");
    watch.setAttribute("class", "card-body");

    const img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.src = img_url + elem.poster_path;

    const btn = document.createElement("button");
    btn.setAttribute("class", "remove-btn");
    btn.innerText = "Remove";
    btn.addEventListener("click", () => {
      wishlist.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      event.target.parentNode.parentNode.remove();
    });

    watch.append(btn);
    watch2.append(img, watch);
    document.getElementById("listwatch").append(watch2);
  });
}

// document.getElementById("footer-body").innerHTML = addFooter();
document.getElementById("wt-navbar").innerHTML = addNavbar();

addToWatch();
