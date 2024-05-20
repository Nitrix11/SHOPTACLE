let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item1');
const carouselInner = document.querySelector('.carousel-inner1');

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel1();
}

function nextSlide1() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel1();
}

function updateCarousel1() {
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

(nextSlide, 100); 


let currentSlide1 = 0;
const slides1 = document.querySelectorAll('.carousel-item');
const carouselInner1 = document.querySelector('.carousel-inner');

function prevSlide() {
    currentSlide1 = (currentSlide1 - 1 + slides1.length) % slides1.length;
    updateCarousel();
}

function nextSlide() {
    currentSlide1 = (currentSlide1 + 1) % slides1.length;
    updateCarousel();
}

function updateCarousel() {
    carouselInner1.style.transform = `translateX(-${currentSlide1 * 100}%)`;
}

setInterval(nextSlide, 5000); 

