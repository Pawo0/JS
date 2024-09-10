const apiKey = `b57ebfca4ac2960ed4be43e208354575`;
const weatherForm = document.getElementById("weatherForm");
const weatherInfo = document.getElementById("weatherInfo");

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = document.getElementById("cityInput").value;
    fetchWeather(city);
})

async function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;
    try{
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`City ${city} not found!`);
        }
        const data = await response.json();
        displayWeather(data);
    }
    catch(error){
        weatherInfo.innerHTML =  error;
    }
}

function displayWeather(data){
    console.log(data)
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const cityName = data.name;
    const icon = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
    weatherInfo.innerHTML = `
        <h2>City name: ${cityName}</h2>
        <img src="${iconUrl}" alt="${cityName}">
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind speed: ${windSpeed} m/s</p>
    `;
}