
const COORDS = 'coords';

function handleGeoSuccess(position) {
    const coords = position.coords;
    const crdObj = {
        latitude : coords.latitude,
        longitude : coords.longitude, 
    }
    localStorage.setItem(COORDS, JSON.stringify(crdObj));
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
        // get weather
    }
}

function init() {
    loadCoords();
}

init();