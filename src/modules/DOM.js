const domFunctions = async () => {
  const container = document.querySelector(".container");
  const weatherElementContainer = container.querySelector(".weather-info");
  const weatherElements = {
    description: weatherElementContainer.querySelector(".weather-description"),
    accTemperature: weatherElementContainer
      .querySelector(".temp")
      .querySelector(".accurate-temp"),
    feelTemperature: weatherElementContainer
      .querySelector(".temp")
      .querySelector(".temp-feel"),
    humidity: weatherElementContainer.querySelector(".humidity"),
    windSpeed: weatherElementContainer.querySelector(".windspeed"),
  };

  const changeTextValue = (element, text) => {
    element.textContent = text;
  };

  const DOMbuild = (weatherData, gifUrl) => {
    changeTextValue(
      weatherElements.description.querySelector("p"),
      weatherData.weatherDescription
    );
    changeTextValue(
      weatherElements.accTemperature.querySelector("p"),
      weatherData.temp
    );
    changeTextValue(
      weatherElements.feelTemperature.querySelector("p"),
      weatherData.tempFeel
    );
    changeTextValue(
      weatherElements.humidity.querySelector("p"),
      weatherData.humidity
    );
    changeTextValue(
      weatherElements.windSpeed.querySelector("p"),
      weatherData.windSpeed
    );
    weatherElements.description.querySelector(
      "img"
    ).src = `http://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`;
    document.querySelector(".weather-gif > img").src = gifUrl;
  };

  return {
    DOMbuild,
  };
};

export default domFunctions;
