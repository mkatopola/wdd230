//weather.js
// VARIABLES FROM HTML ELEMENTS
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const day1Date = document.querySelector('#day1-date');
const day1Temp = document.querySelector('#day1-temp');
const day2Date = document.querySelector('#day2-date');
const day2Temp = document.querySelector('#day2-temp');
const day3Date = document.querySelector('#day3-date');
const day3Temp = document.querySelector('#day3-temp');

// API VARIABLES
const apiKey = 'a117b20ba1e16d10e8dec2a531e2e3b9';
const myLat = '-15.78';
const myLong = '35.00';

// URL
const myUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${apiKey}&units=metric`;

// WEATHER DATA
async function apiFetch() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        myDescription.textContent = 'Unable to fetch weather data at the moment.';
    }
};

function displayResults(weatherData) {
    // Current weather data
    const currentWeather = weatherData.list[0];
    myDescription.textContent = currentWeather.weather[0].description;
    myTemperature.textContent = `${currentWeather.main.temp} °C`;
    myGraphic.src = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;
    myGraphic.alt = currentWeather.weather[0].description;

    // Forecast for the next 3 days at noon (12:00:00)
    const dailyWeather = weatherData.list.filter((reading) => reading.dt_txt.includes("12:00:00")).slice(1, 4);

    // Format the date
    const options = { weekday: 'long', month: 'long', day: 'numeric' };

    day1Date.textContent = new Date(dailyWeather[0].dt_txt).toLocaleDateString(undefined, options);
    day1Temp.textContent = `${dailyWeather[0].main.temp} °C`;

    day2Date.textContent = new Date(dailyWeather[1].dt_txt).toLocaleDateString(undefined, options);
    day2Temp.textContent = `${dailyWeather[1].main.temp} °C`;

    day3Date.textContent = new Date(dailyWeather[2].dt_txt).toLocaleDateString(undefined, options);
    day3Temp.textContent = `${dailyWeather[2].main.temp} °C`;
}

apiFetch();
