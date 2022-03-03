import "normalize.css";
import "./style.css";
import requiredWeatherData from "./modules/weather";
import searchGifs from "./modules/giphy";
import domFunctions from "./modules/DOM";

let currentLocation;
let pastLocation;
let currentUnit = "metric";

const form = document.forms[0];
const searchBar = document.querySelector(".city-search");

(async () => {
  currentLocation = "London";
  let weatherData = await requiredWeatherData(currentLocation, currentUnit);
  const gifUrl = await searchGifs(weatherData.weatherState);
  (await domFunctions()).DOMbuild(weatherData, gifUrl, currentUnit);
  const metricButton = document.querySelector(".metric");
  const imperialButton = document.querySelector(".imperial");

  metricButton.addEventListener("click", async () => {
    if (currentUnit === "imperial") {
      currentUnit = "metric";
      weatherData = await requiredWeatherData(currentLocation, currentUnit);
      (await domFunctions()).DOMbuild(weatherData, gifUrl, currentUnit);
    }
  });

  imperialButton.addEventListener("click", async () => {
    if (currentUnit === "metric") {
      currentUnit = "imperial";
      weatherData = await requiredWeatherData(currentLocation, currentUnit);
      (await domFunctions()).DOMbuild(weatherData, gifUrl, currentUnit);
    }
  });
})();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  pastLocation = currentLocation;
  currentLocation = searchBar.value;
  const weatherData = await requiredWeatherData(currentLocation, currentUnit);
  if (weatherData instanceof Error) {
    currentLocation = pastLocation;
    return;
  }
  const gifUrl = await searchGifs(weatherData.weatherState);
  (await domFunctions()).DOMbuild(weatherData, gifUrl, currentUnit);
});
