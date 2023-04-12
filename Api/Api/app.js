const API_KEY = 'b190a0605344cc4f3af08d0dd473dd25';

$('#location-form').submit(function (event) {
    event.preventDefault();
    const city = $('#city-input').val();
    getWeather(city);
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            const weatherData = {
                description: data.weather[0].description,
                temp: data.main.temp,
                feels_like: data.main.feels_like,
                humidity: data.main.humidity
            };
            displayWeather(weatherData);
        },
        error: function (error) {
            console.log(error);
            displayError();
        }
    });
}

function displayWeather(data) {
    const html = `
    <h2>Current weather for ${$('#city-input').val()}</h2>
    <p>Description: ${data.description}</p>
    <p>Temperature: ${data.temp}°C</p>
    <p>Feels like: ${data.feels_like}°C</p>
    <p>Humidity: ${data.humidity}%</p>
  `;
    $('#weather-results').html(html);
}

function displayError() {
    const html = `
    <p>Error: Could not get weather data.</p>
  `;
    $('#weather-results').html(html);
}
