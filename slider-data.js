let movies = [
    {
        name: 'luca',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: './images/slider 5.PNG'
        
    },
    {
        name: 'Rudra: The Edge of Darkness',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-qkvy28_b0d936ca.jpeg?region=0%2C0%2C800%2C600'
    },
    {
        name: 'The Book of Boba Fett',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'https://www.thenews.com.pk//assets/uploads/updates/2019-10-14/541087_2162700_abominal_updates.jpg'
    },
    {
        name: 'raya and the last dragon',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: './images/slider 4.PNG'
    },
    {
        name: 'WI  vs IND 317/8 (50)',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'https://olps.sg/sites/default/files/styles/hero/public/events/encanto-banner.jpg?itok=txXkqOUB'
    },
    {
        name: 'The Book of Boba Fett',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'https://godinallthings.com/wp-content/uploads/2020/08/moana-logo.jpg'
    },
    {
        name: 'The Book of Boba Fett',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'https://c4.wallpaperflare.com/wallpaper/769/688/36/5bd3be74ed1df-wallpaper-preview.jpg'
    }
];

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // creating dom elements

    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up images which is in slider-data.js
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elemnts
    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    p.className = 'movie-desc';

    sliders.push(slide);

    // adding sliding effect
    if (sliders.length) {
        // sliders[0].style.marginLeft = `calc(-${100* (sliders.length - 2) } % - ${ 30 * (sliders.length - 2) }px)`;
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
            30 * (sliders.length - 2)
          }px)`;
    }
}
for (let i = 0; i < 3; i++) {
    createSlide();
};

setInterval(() => {
    createSlide();
}, 3000);

//video cards
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

// cards sliders

let cardContainers = document.querySelectorAll('.video-card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})