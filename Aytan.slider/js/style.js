let slideImage = document.querySelectorAll(".slide-image");
let slidesContainer = document.querySelector(".slides-container");
let nextBtn = document.querySelector(".next-btn");
let preBtn = document.querySelector(".pre-btn");
let Dots = document.querySelector(".dots");


let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;


function Slide() {

    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });

    slideImage[0].classList.add("active");
}
Slide();


function CreateDots() {
    for (let i = 0; i < slideImage.length; i++) {
        let Dot = document.createElement("div");
        Dot.classList.add("dot");
        Dots.appendChild("dot");
    }
    Dots.children[0].classList.add("active");

}

nextBtn.addEventListener("click", () => {
    if (currentSlide >= numberOfImages - 1) {
        goToSlide(0);
        return;
    }
    currentSlide++;
    gotoSlide(currentSlide);

})
preBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
        goToSlide(numberOfImages - 1);
        return;
    }
    currentSlide--;
    gotoSlide(currentSlide);

})

function gotoSlide(slideNumber) {
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)"

    SetActiveClass();
};

function SetActiveClass() {
    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");



    let currentDot = document.querySelector(".dot.active");
    currentDot.classList.remove("active");
    Dots.children[currentSlide].classList.add("active");
}