const domFunctions = () => {
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

  const DOMbuild = (weatherData, gifUrl, currentUnit) => {
    let tempUnit;
    let speedUnit;
    if (currentUnit === "metric") {
      tempUnit = "\u2103";
      speedUnit = "km/h";
    }

    if (currentUnit === "imperial") {
      tempUnit = "\u2109";
      speedUnit = "mph";
    }

    changeTextValue(
      weatherElements.description.querySelector("p"),
      weatherData.weatherDescription
    );
    changeTextValue(
      weatherElements.accTemperature.querySelector("p"),
      weatherData.temp + tempUnit
    );
    changeTextValue(
      weatherElements.feelTemperature.querySelector("p"),
      weatherData.tempFeel + tempUnit
    );
    changeTextValue(
      weatherElements.humidity.querySelector("p"),
      `${weatherData.humidity}%`
    );
    changeTextValue(
      weatherElements.windSpeed.querySelector("p"),
      weatherData.windSpeed + speedUnit
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
