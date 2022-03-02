const weatherFunctions = () => {
  const weatherHit = async (location, unitState) => {
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
  };

  const filterWeather = async (location, unitState) => {
    try {
      const weatherData = await weatherHit(location, unitState);
      const filteredWeatherData = {};
      filteredWeatherData.temp = weatherData.main.temp;
      filteredWeatherData.tempFeel = weatherData.main.feels_like;
      filteredWeatherData.humidity = weatherData.main.humidity;
      filteredWeatherData.windSpeed = weatherData.wind.speed;
      filteredWeatherData.weatherState = weatherData.weather[0].main;
      filteredWeatherData.weatherDescription =
        weatherData.weather[0].description;
      return filteredWeatherData;
    } catch (err) {
      return err;
    }
  };

  return {
    weatherHit,
    filterWeather,
  };
};

const returnRequiredWeatherData = (currentLocation, currentUnit) =>
  weatherFunctions().filterWeather(currentLocation, currentUnit);

export default returnRequiredWeatherData;
