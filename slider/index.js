const slide = document.querySelector('.slides')
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.slides button');
let slidId = 0;
let intervalId;


window.addEventListener("DOMContentLoaded", function () {
    showSlide();
    intervalId = setInterval(() => {
        nextSlide()
    }, 5000)
})

function showSlide() {
    if (slidId < 0) slidId = slides.length - 1;
    if (slidId >= slides.length) slidId = 0;
    slides[slidId].classList.add("showSlide");
}

function nextSlide() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        nextSlide()
    }, 5000);
    slides[slidId].classList.remove("showSlide");
    showSlide(++slidId);
}

function prevSlide() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        nextSlide()
    }, 5000);
    slides[slidId].classList.remove("showSlide");
    showSlide(--slidId);
}


slide.addEventListener("mouseover", () => {
    btns.forEach(btn => {
        btn.style.backgroundColor = "hsla(0, 0%, 0%, 0.5)"
    })
});

slide.addEventListener("mouseout", () => {
    btns.forEach(btn => {
        btn.style.backgroundColor = "hsla(0, 0%, 0%, 0.1)"
    })
});
