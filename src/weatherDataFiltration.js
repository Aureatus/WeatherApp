import weatherHit from "./weatherHit";

const filteredWeatherData = {};

const filterWeather = async (location, unitState) => {
  const weatherData = await weatherHit(location, unitState);

  filteredWeatherData.main = weatherData.main;
  filteredWeatherData.weather = weatherData.weather;
  filteredWeatherData.wind = weatherData.wind;
};

filterWeather("London", "metric");

/* filteredWeatherData.push(
    weatherData.main,
    weatherData.weather,
    weatherData.wind
  ); */

export default filteredWeatherData;
