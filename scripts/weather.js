// VARIABLES FROM HTML ELEMENTS
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

// API VARIABLES
const apiKey = 'a117b20ba1e16d10e8dec2a531e2e3b9';
const myLat = '-15.78';
const myLong = '35.00';

// URL
const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${apiKey}&units=metric`;

// WEATHER DATA
async function apiFetch() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

function displayResults(weatherData) {
    myTown.textContent = weatherData.name;
    myDescription.textContent = weatherData.weather[0].description;
    myTemperature.textContent = `${weatherData.main.temp} °C`;
    myGraphic.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    myGraphic.alt = weatherData.weather[0].description;
}

apiFetch();
