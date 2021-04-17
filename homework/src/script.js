// challenge 1
let now = new Date();

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
};

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

let currentDay = document.querySelector("#current-day");
currentDay.innerText = `${day} ${hours}:${minutes}`;

// challenge 2
function displayCity(event) {
  event.preventDefault();
  let input = document.querySelector("#input-city");
  let city = document.querySelector("#city")
  city.innerText = input.value;
  input.value = ''
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", displayCity);

// challenge 3
let actualTemperature = document.getElementById("temperature");
function toFahrenheit() {
  actualTemperature.innerText = "46°F";
}

function toCelsius() {
  actualTemperature.innerText = "8°C";
}

let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');

celsius.addEventListener('click', toCelsius);
fahrenheit.addEventListener('click', toFahrenheit);

