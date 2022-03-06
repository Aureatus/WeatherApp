const domFunctions = () => {
  const container = document.querySelector(".container");
  const weatherElementContainer = container.querySelector(".weather-info");
  // Object with DOM references as the values to keynames that line up with weatherData.
  const weatherElements = {
    weatherDescription: weatherElementContainer.querySelector(
      ".weather-description"
    ),
    temp: weatherElementContainer
      .querySelector(".temp")
      .querySelector(".accurate-temp"),
    tempFeel: weatherElementContainer
      .querySelector(".temp")
      .querySelector(".temp-feel"),
    humidity: weatherElementContainer.querySelector(".humidity"),
    windSpeed: weatherElementContainer.querySelector(".windspeed"),
  };

  const changeTextValue = (element, text) => {
    element.textContent = text;
  };

  const DOMbuild = (weatherData, gifUrl, currentUnit) => {
    // Inserts weatherData into their respective elements.
    let tempUnit;
    let speedUnit;
    if (currentUnit === "metric") {
      tempUnit = "\u2103";
      speedUnit = "m/s";
    }

    if (currentUnit === "imperial") {
      tempUnit = "\u2109";
      speedUnit = "mph";
    }

    const weatherElementKeys = Object.keys(weatherElements);

    weatherElementKeys.forEach((element) => {
      let unit;
      switch (element) {
        case "temp":
          unit = tempUnit;
          break;
        case "tempFeel":
          unit = tempUnit;
          break;
        case "humidity":
          unit = "%";
          break;
        case "windSpeed":
          unit = speedUnit;
          break;
        default:
          unit = "";
      }

      changeTextValue(
        weatherElements[element].querySelector("p"),
        weatherData[element] + unit
      );
    });
    weatherElements.weatherDescription.querySelector(
      "img"
    ).src = `http://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`;
    document.querySelector(".weather-gif > img").src = gifUrl;
  };

  return {
    DOMbuild,
  };
};

export default domFunctions;
