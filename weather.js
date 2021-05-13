const weather = document.querySelector(".js-weather");
const API_KEY = "APPKEY";
const COORDS = 'coords';

async function getWeather(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

    if(!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const result = await response.json();
    const temperature = result.main.temp;
    const place = result.name;
    weather.innerText = `${temperature} @ ${place}`;
}

function handleGeoSuccess(position) {
    const coords = position.coords;
    const crdObj = {
        latitude : coords.latitude,
        longitude : coords.longitude, 
    }
    localStorage.setItem(COORDS, JSON.stringify(crdObj));
    getWeather(crdObj.latitude, crdObj.longitude);
}

function handleGeoError() {
    console.log("can't access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();