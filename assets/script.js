var today = moment().format("L");
console.log(today);

var cities = [];
var cityInputEl = document.getElementById("cityInput");
var weatherContentEl = document.getElementById("weatherContent");
var citySearchEl = document.getElementById("citySearch");
var weather5DayEl = document.getElementById("fiveDay");
var searchHistoryEl = document.getElementById("searchHistory");
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
}


var get5DayWeather = function (city) {
  var apiKey = "60b403ea2e2e0ddffaf71ee67603d08e";
  var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        show5DayWeather(data);
      });
    });
};

var show5DayWeather = function (weather) {
  weather5DayEl.textContent = "5-Day Forecast";
  weather5DayEl.style.fontSize = "large";

  var forecast = weather.list;
  for (var i = 5; i < forecast.length; i = i + 8) {
    var dailyForecast = forecast[i];

    var forecastEl = document.createElement("div");
    forecastEl.classList = "card bg-primary text-dark m-4";
    weather5DayEl.appendChild(forecastEl);

    var forecastDate = document.createElement("h4")
    forecastDate.textContent = moment.unix(dailyForecast.dt).format("MM, DD, YYYY");
    forecastDate.classList = "card-header text-center"
    forecastEl.appendChild(forecastDate);

    var forecastTempEl = document.createElement("span");
    forecastTempEl.classList = "card-body text-center";
    forecastTempEl.textContent = dailyForecast.main.temp + " °F";
    forecastEl.appendChild(forecastTempEl);

    var forecastHumidityEl = document.createElement("span");
    forecastHumidityEl.classList = "card-body text-center";
    forecastHumidityEl.textContent = dailyForecast.main.humidity + "  %";
    forecastEl.appendChild(forecastHumidityEl);
  }
}



searchHistoryEl.addEventListener("click", handleSearchBtn);
searchBtn.addEventListener("click", getWeather);