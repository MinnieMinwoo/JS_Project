
const API_KEY = "6f0397ab75a1de8483690250196f61fd";

function getWeather(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherContainer = document.getElementById("weather");
            const weather = document.querySelector('#weather span:nth-child(1)');
            const temp = document.querySelector('#weather span:nth-child(2)');
            const city = document.querySelector('#weather span:nth-child(3)');
            weather.innerText = data.weather[0].main;
            temp.innerText = `${String(Math.round(data.main.temp * 10) / 10)}°C`;
            city.innerText = data.name;
        });
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const option = "units=metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&${option}`;
    getWeather(url);
}

function onGeoError() {
    const option = "units=metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&APPID=${API_KEY}&${option}`;
    getWeather(url);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);