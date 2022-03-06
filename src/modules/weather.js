const weatherFunctions = () => {
  const weatherHit = async (location, unitState) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unitState}&APPID=18e25686555e1cb7c85bd078129127c3`,
        { mode: "cors" }
      );

      const weatherData = await response.json();
      if (!response.ok) {
        throw new Error(weatherData.message);
      }
      return weatherData;
    } catch (err) {
      alert(err);
      return err;
    }
  };

  const filterWeather = async (input) => {
    const weatherData = await input;
    try {
      if (weatherData instanceof Error) {
        throw new Error(weatherData.message);
      }

      const filteredWeatherData = {};
      filteredWeatherData.temp = weatherData.main.temp;
      filteredWeatherData.tempFeel = weatherData.main.feels_like;
      filteredWeatherData.humidity = weatherData.main.humidity;
      filteredWeatherData.windSpeed = weatherData.wind.speed;
      filteredWeatherData.weatherState = weatherData.weather[0].main;
      filteredWeatherData.weatherDescription =
        weatherData.weather[0].description;
      filteredWeatherData.weatherIcon = weatherData.weather[0].icon;
      return filteredWeatherData;
    } catch (err) {
      return err;
    }
  };

  const returnRequiredWeatherData = async (currentLocation, currentUnit) => {
    try {
      const data = weatherFunctions().filterWeather(
        weatherHit(currentLocation, currentUnit)
      );
      if (data instanceof Error) {
        throw new Error(data.message);
      }
      return data;
    } catch (err) {
      return err;
    }
  };

  return {
    weatherHit,
    filterWeather,
    returnRequiredWeatherData,
  };
};

export default weatherFunctions().returnRequiredWeatherData;
