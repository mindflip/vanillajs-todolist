const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(num) {
    const image = new Image();
    image.src = `images/${num}.jpeg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function init() {
    const randomNumber = Math.floor(Math.random() * IMG_NUMBER) + 1;
    paintImage(randomNumber);
}

init();