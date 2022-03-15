
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


















var getCityWeather = function (city) {
  var apiKey = "08ef12578be8b6481d16de9c739f47a8";
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
}