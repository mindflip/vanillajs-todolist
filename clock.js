const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("span");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${setDigit(hours)}:${setDigit(minutes)}:${(seconds < 10) ? '0'+seconds : seconds}`;
}

const setDigit = (num) => num < 10 ? `0${num}`: num;

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();