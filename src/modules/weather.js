/* export default async function weatherHit(location, unitState) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unitState}&APPID=18e25686555e1cb7c85bd078129127c3`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    return err;
  }
}

import weatherHit from "./weatherHit";

async function filterWeather(location, unitState) {
  try {
    const weatherData = await weatherHit(location, unitState);
    const filteredWeatherData = {};
    filteredWeatherData.main = weatherData.main;
    filteredWeatherData.weather = weatherData.weather;
    filteredWeatherData.wind = weatherData.wind;
    return filteredWeatherData;
  } catch (err) {
    return err;
  }
}

export default filterWeather;

import filterWeather from "./weatherDataFiltration";

async function getState() {
  try {
    const filteredWeatherData = await filterWeather("London", "metric");
    return filteredWeatherData.weather[0].main;
  } catch (err) {
    return err;
  }
}

const weatherState = getState();

export default weatherState;
*/
