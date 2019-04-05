const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

function nextSlide(){
    //get the class current
    const current = document.querySelector('.current');
    //remove the current class
    current.classList.remove('current');

    //check for next slide
    if(current.nextElementSibling){
        //if yes add class to next sibling
        current.nextElementSibling.classList.add('current');
    }
    else{
        //put current class on start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

function prevSlide(){
    //get the class current
    const current = document.querySelector('.current');
    //remove the current class
    current.classList.remove('current');

    //check for previous slide
    if(current.previousElementSibling){
        //if yes add class to previous sibling
        current.previousElementSibling.classList.add('current');
    }
    else{
        //put current class on last slide
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});