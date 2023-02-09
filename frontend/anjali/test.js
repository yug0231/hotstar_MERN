import { addNavbar } from "../NAVBARFINAL/navbar.js";

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const fetchGenres = async (genreID) => {
  let res = await fetch("https://catmock-jsonserver.herokuapp.com/moviedata");
  let data = await res.json();
  // console.log(data.genres);
  getGenres(genreID, data.genres);
};

const getGenres = (genreID, data) => {
  data.map((elem) => {
    if (elem.id === genreID) {
      document.getElementById("genre").textContent = elem.name;
    }
  });
};

const foo = () => {
  let defaultMovie = {
    adult: false,
    backdrop_path: "/7IW5xt241RUAufYiFBoAPx5n52V.jpg",
    genre_ids: [35, 18],
    id: 936074,
    original_language: "French",
    original_title: "Ténor",
    overview:
      "While working part-time as a food deliveryman, Antoine, an aspiring young rapper from the suburbs of Paris, meets Mrs. Loiseau, an eminent teacher at the Paris Opéra. Stunned by the young man's raw talent, she introduces him to the world of opera. As Antoine becomes one of Mrs. Loiseau's students, he hides his new dream from his friends and family, fearing that they won’t understand – this double life burdens him... Somewhere in between the gilded and uptight Parisian upper-class, and the harsh yet free-spirited and familiar suburbs he grew up in, Antoine will have to find his own voice.",
    poster_path: "/t8ShCiZxrbiy7kuO06OilLI3PeL.jpg",
    release_date: "2022-05-04",
    title: "Tenor",
  };
  let clickedMovie =
    JSON.parse(localStorage.getItem("moviename")) || defaultMovie;
  display(clickedMovie);
};

const display = (data) => {
  const img_url = "https://image.tmdb.org/t/p/w1280";
  const genreID = data.genre_ids[0];
  fetchGenres(genreID);

  document.getElementById("m-title").textContent =
    data.original_title || data.name;
  document.getElementById("m-overview").textContent =
    data.overview.substring(0, 203) + "...";
  document.getElementById("m-poster").src = img_url + data.backdrop_path;
  if (data.release_date) {
    document.getElementById("release-date").textContent =
      data.release_date.substring(0, 4);
  } else {
    document.getElementById("release-date").textContent =
      data.first_air_date.substring(0, 4);
  }
  document.getElementById("language").textContent = data.original_language;
};

function addToWatchlist() {
  location.href = "../watchlist/watchlist.html";
  wishlist.push(JSON.parse(localStorage.getItem("moviename")));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// mmovie slider js part starts from here

function xyz() {
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

  cardContainers.forEach((items, i) => {
    let containerDimensions = items.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
      items.scrollLeft += containerWidth - 200;
    });
    preBtns[i].addEventListener("click", () => {
      items.scrollLeft -= containerWidth + 200;
    });
  });

  let clickedMovie = JSON.parse(localStorage.getItem("moviename"));
  let url;
  if (clickedMovie.first_air_date !== undefined) {
    url = `
    https://api.themoviedb.org/3/tv/${clickedMovie.id}/similar?api_key=65500d68b94658647a8d5becaf12d886`;
  } else {
    url = `https://api.themoviedb.org/3/movie/${clickedMovie.id}/similar?api_key=65500d68b94658647a8d5becaf12d886`;
  }
  showtodisplay(url);
}

async function showtodisplay(url) {
  try {
    const a1 = await fetch(url);
    const a2 = await a1.json();
    // console.log(a2);
    //console.log(a2.moviedata);
    display1(a2.results);
  } catch (error) {
    console.log(error);
  }
}
xyz();

function display1(data) {
  const img_url = "https://image.tmdb.org/t/p/w500";
  data.map(function (el) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");

    const image = document.createElement("img");
    image.setAttribute("class", "card-img");
    image.src = img_url + el.poster_path;

    const div1 = document.createElement("div");
    div1.setAttribute("class", "card-body");

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "name");
    h2.innerText = el.title || el.name;

    const btn = document.createElement("button");
    btn.setAttribute("class", "watchlist-btn");
    btn.innerText = "Add to watchlist";
    btn.addEventListener("click", () => {
      localStorage.setItem("moviename", JSON.stringify(el));
      addToWatchlist();
    });

    div1.append(h2, btn);
    div.append(image, div1);

    document.querySelector(".card-container").append(div);
  });
}

// trailer page redirection
function popup() {
  location.href = "../trailer/trailer.html";
}

foo();

document.getElementById("bn-navbar").innerHTML = addNavbar();

// adding event listners
document
  .querySelector(".fa-sharp.fa-solid.fa-play.fa-lg")
  .addEventListener("click", popup);
document.querySelector("#span1").addEventListener("click", popup);
document
  .querySelector(".fa-solid.fa-plus.fa-xl")
  .addEventListener("click", addToWatchlist);
