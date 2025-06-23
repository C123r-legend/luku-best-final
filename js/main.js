//=============== SHOW MENU ===============//
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   });
}

// Menu hidden
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
}

//=============== SLIDESHOW ===============//
const slideshowContainer = document.getElementById('slideshow');
const slides = slideshowContainer ? slideshowContainer.querySelectorAll('img') : [];
let currentSlideIndex = 0;


const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;

function showImage(index) {
   const imageWidth = images[0].clientWidth;
   carousel.style.transform = `translateX(${-index * imageWidth}px)`;
}

nextButton.addEventListener('click', () => {
   currentIndex = (currentIndex + 1) % images.length;
   showImage(currentIndex);
});

prevButton.addEventListener('click', () => {
   currentIndex = (currentIndex - 1 + images.length) % images.length;
   showImage(currentIndex);
});

