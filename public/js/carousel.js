const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

var counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', ()=>{
    if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'lastClone'){
        carouselImages.slide.style.transition = 'none';
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone'){
        carouselImages.slide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px)';
    }
});

const carouselSlide2 = document.querySelector('.carousel-slide2');
const carouselImages2 = document.querySelectorAll('.carousel-slide2 img');

const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2 = document.querySelector('#nextBtn2');

var counter2 = 1;
const size2 = carouselImages2[0].clientWidth;

carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';

nextBtn2.addEventListener('click', ()=>{
    if (counter2 >= carouselImages2.length -1) return;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2++;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});

prevBtn2.addEventListener('click', ()=>{
    if (counter2 <= 0) return;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2--;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});

carouselSlide2.addEventListener('transitionend', ()=>{
    if (carouselImages2[counter2].id === 'lastClone'){
        carouselImages2.slide.style.transition = 'none';
        counter2 = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (size2 * counter2) + 'px)';
    }
    if (carouselImages2[counter2].id === 'firstClone'){
        carouselImages2.slide.style.transition = 'none';
        counter2 = carouselImages.length - counter2;
        carouselSlide2.style.transform = 'translateX(' + (size2 * counter2) + 'px)';
    }
});