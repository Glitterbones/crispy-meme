
var today = moment().format("L");
console.log(today);

var cities = [];
var cityInputEl = document.getElementById("cityInput");
var weatherContentEl = document.getElementById("weatherContent");
var citySearchEl = document.getElementById("searchCity");
var weather5DayEl = document.getElementById("fiveDay");
var searchHistoryEl = document.getElementById("History");
var currentWeatherEl = document.getElementById("currentWeather");

var getWeather = function (event) {
  event.preventDefault();
  var city = cityInputEl.value.trim();

  if (city) {
    getCityWeather(city);
    get5DayWeather(city);
    cities.push(city);
    cityInputEl.value = "";

  } else {
    alert("Please enter a City");
  }

  saveSearch();
  renderSearch();
}

var saveSearch = function () {
  localStorage.setItem("cities", JSON.stringify(cities));
};


function renderSearch() {
  searchHistoryEl.innerHTML = "";
  for (var i = 0; i < cities.length; i++) {
    var button = document.createElement("button");
    button.classList = "btn-btn-info";
    button.setAttribute("value", cities[i]);
    button.textContent = cities[i];
    button.style.color = "info";
    searchHistoryEl.appendChild(button);
  }

var showWeather = function (weather, cities) {
currentWeatherEl.textContent = cities;
  currentWeatherEl.style.fontSize = "large";
  currentWeatherEl.style.color = "info";
  currentWeatherEl.classList = "card bg-info text-center";

  var date = document.createElement("h4");
  date.classList = "card-body text-dark m-4";
  date.textContent = moment(weather.dt.value).format("MMM DD, YYYY");
  currentWeatherEl.appendChild(date);

  var tempEl = document.createElement("h4");
  tempEl.classList = "card-body text dark";
  tempEl.textContent = "Temperature: " + weather.main.temp + " °F";
  currentWeatherEl.appendChild(tempEl);

  var humidityEl = document.createElement("h6");
  humidityEl.classList = "card-body text-light";
  humidityEl.textContent = "Humidity: " + weather.main.humidity + " %";
  currentWeatherEl.appendChild(humidityEl);

  var windEl = document.createElement("h6");
  windEl.classList = "card-body text-dark";
  windEl.textContent = "Wind Speed: " + weather.wind.speed + " MPH";
  currentWeatherEl.appendChild(windEl);
}


var 5DayWeather = function (city) {
  var apiKey = "60b403ea2e2e0ddffaf71ee67603d08e";
  var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        show5DayWeather(data);
      });
    });
};

















var getCityWeather = function (city) {
  var apiKey = "08ef12578be8b6481d16de9c739f47a8";
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
}