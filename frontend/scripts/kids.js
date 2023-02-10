
let movies = [
    {
        name: 'Marvel:SpiderMan',
        des: 'Spider-Man: The Animated Series (Spider-Man TAS for short), is an American superhero animated television series based on the Marvel Comics superhero of the same name.[2] The series aired on the Fox Kids',
        image: 'images/slider1.webp'
    },
    {
        name: 'Shinchan',
        des: 'Shinnosuke Nohara (野原しんのすけ), also known as Shin-chan or just Shin, is the titular main protagonist of Crayon Shin-chan. He is the son of Hiroshi and Misae. His nickname is "Shin-chan" Nohara ',
        image: 'images/slider2.webp'
    },
    {
        name: 'Doraemon',
        des: 'Doraemon (Japanese: ドラえもん [doɾaemoɴ]) is a Japanese manga series written and illustrated by Fujiko F. Fujio. The manga was first serialized in December ',
        image: 'images/slider3.webp'
    },
    {
        name: 'Pokemon',
        des: 'A Pokemon master, along with his small group of friends, travels around the world to capture as many pocket monsters as he can.',
        image: 'images/pokemon.jpg'
    },
    {
        name: 'Dragon Ball Z',
        des: '"Dragon Ball Z" follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. "Dragon Ball Z"',
        image: 'images/dragon.jpg'
    }
];


let carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // DOM

    let slide = document.createElement('div');

    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');



    // attaching all the elements

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);


    // setting up images whsich is in slider-data

    imgElement.src = movies[slideIndex].image;
    slideIndex++;


    // setting elements

    slide.className = "slider";
    content.className = "slider-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);




    // adding sliding effect'


    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
            }px)`;
    }

}

createSlide();
for (i = 0; i < 6; i++) {
    createSlide();
};
setInterval(() => {
    createSlide();
}, 3000);

// creating sliding bar for carousel






















// video cards playing just after carousel(when we will hovwe in it)

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();

    });
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    });
});


// card sliders for nxt button and pre button to work

let cardContainers = [...document.querySelectorAll(".card-container,.card-container1,.card-container2,.card-container3,.card-container4,.card-container5,.card-container6")];
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




document.querySelector(".sub-btn").addEventListener("click",()=>{
    window.location.href="index.html"

})