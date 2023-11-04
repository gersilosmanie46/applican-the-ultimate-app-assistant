// Filename: sophisticated_code.js

// This code is a complex weather application that uses multiple APIs
// It fetches weather data from an external API and displays it in a user-friendly way

// API keys for different weather services
const OPENWEATHERMAP_API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
const WEATHERBIT_API_KEY = "YOUR_WEATHERBIT_API_KEY";
const ACCUWEATHER_API_KEY = "YOUR_ACCUWEATHER_API_KEY";

// Function to get user's location using the browser's geolocation
function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
}

// Function to fetch weather data from OpenWeatherMap API
function fetchWeatherDataOpenWeatherMap(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${OPENWEATHERMAP_API_KEY}`;
  return fetch(url).then((response) => response.json());
}

// Function to fetch weather data from Weatherbit API
function fetchWeatherDataWeatherbit(location) {
  const url = `https://api.weatherbit.io/v2.0/current?lat=${location.latitude}&lon=${location.longitude}&key=${WEATHERBIT_API_KEY}`;
  return fetch(url).then((response) => response.json());
}

// Function to fetch weather data from AccuWeather API
function fetchWeatherDataAccuweather(location) {
  const url = `https://api.accuweather.com/currentconditions/v1/${location.latitude},${location.longitude}?apikey=${ACCUWEATHER_API_KEY}`;
  return fetch(url).then((response) => response.json());
}

// Function to display weather information
function displayWeatherData(data) {
  console.log(`Current temperature: ${data.main.temp}°C`);
  console.log(`Weather condition: ${data.weather[0].description}`);
  console.log(`Humidity: ${data.main.humidity}%`);
  // Other information from the API can be displayed here
}

// Main function to fetch and display weather data
function main() {
  getUserLocation()
    .then((location) => {
      console.log("Fetching weather data from OpenWeatherMap...");
      return fetchWeatherDataOpenWeatherMap(location);
    })
    .then((data) => {
      displayWeatherData(data);
      console.log("Fetching weather data from Weatherbit...");
      return fetchWeatherDataWeatherbit(location);
    })
    .then((data) => {
      displayWeatherData(data);
      console.log("Fetching weather data from AccuWeather...");
      return fetchWeatherDataAccuweather(location);
    })
    .then((data) => {
      displayWeatherData(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

main();