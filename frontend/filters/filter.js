import { addNavbar } from "../NAVBARFINAL/navbar.js";

const lang = {
  Odia: "or",
  Hindi: "hi",
  Bengali: "bn",
  Telugu: "te",
  English: "en",
  Tamil: "ta",
  Kannada: "kn",
  Korean: "ko",
  Japanese: "ja",
};

const genre = {
  Romance: 10749,
  Horror: 27,
  Comedy: 35,
  Action: 28,
  Adventure: 12,
  Animation: 16,
};

let filters = JSON.parse(localStorage.getItem("filter-type")) || {};

const init = () => {
  const key = "65500d68b94658647a8d5becaf12d886";
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}`;
  if (filters.type === "lang") {
    url += `&with_original_language=${lang[filters.content]}`;
  } else {
    url += `&with_genres=${genre[filters.content]}&include_video=false`;
  }
  getData(url);
};

const getData = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data.results);

  displayFilteredMovie(data.results);
};

const displayFilteredMovie = (data) => {
  document.getElementById("filter-type-title").textContent = filters.content;

  const imgUrl = `https://image.tmdb.org/t/p/w500`;
  const parentDiv = document.getElementById("parentbox");
  parentDiv.innerHTML = "";

  data.forEach((element) => {
    const boxDiv = document.createElement("div");
    boxDiv.className = "box";

    const img = document.createElement("img");
    img.src = imgUrl + element.backdrop_path;

    const title = document.createElement("h3");
    title.textContent = element.original_title;

    boxDiv.append(img, title);

    parentDiv.append(boxDiv);
  });
};

init();

document.getElementById("fl-navbar").innerHTML = addNavbar();
