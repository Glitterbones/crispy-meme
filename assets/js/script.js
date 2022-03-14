var getCityWeather = function (city) {
  var apiKey = "08ef12578be8b6481d16de9c739f47a8";
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`; 