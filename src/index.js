import "normalize.css";
import "./style.css";
import requiredWeatherData from "./modules/weather";
import searchGifs from "./modules/giphy";
import domFunctions from "./modules/DOM";

let currentLocation;
let currentUnit = "metric";

const form = document.forms[0];
const searchBar = document.querySelector(".city-search");

document.querySelector(".lds-ring").style.visibility = "hidden";

(async () => {
  currentLocation = "London";
  document.querySelector(
    ".current-location"
  ).textContent = `Current location: ${currentLocation} `;
  document.querySelector(".lds-ring").style.visibility = "visible";
  document.querySelector(".container").style.opacity = "0.1";
  let weatherData = await requiredWeatherData(currentLocation, currentUnit);
  const gifUrl = await searchGifs(weatherData.weatherState);
  (await domFunctions()).DOMbuild(weatherData, gifUrl, currentUnit);
  document.querySelector(".lds-ring").style.visibility = "hidden";
  document.querySelector(".container").style.opacity = "1";
  const metricButton = document.querySelector(".metric");
  const imperialButton = document.querySelector(".imperial");

  metricButton.style.backgroundColor = "palegreen";

  metricButton.addEventListener("click", async () => {
    if (currentUnit === "imperial") {
      currentUnit = "metric";
      weatherData = await requiredWeatherData(currentLocation, currentUnit);
      (await domFunctions()).DOMbuild(weatherData, gifUrl, currentUnit);
      metricButton.style.backgroundColor = "palegreen";
      imperialButton.style.backgroundColor = "#3d3b30";
    }
  });

  imperialButton.addEventListener("click", async () => {
    if (currentUnit === "metric") {
      currentUnit = "imperial";
      weatherData = await requiredWeatherData(currentLocation, currentUnit);
      (await domFunctions()).DOMbuild(weatherData, gifUrl, currentUnit);
      imperialButton.style.backgroundColor = "palegreen";
      metricButton.style.backgroundColor = "#3d3b30";
    }
  });
})();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  document.querySelector(".lds-ring").style.visibility = "visible";
  document.querySelector(".container").style.opacity = "0.1";
  const weatherData = await requiredWeatherData(searchBar.value, currentUnit);
  if (weatherData instanceof Error) {
    document.querySelector(".lds-ring").style.visibility = "hidden";
    document.querySelector(".container").style.opacity = "1";
    return;
  }
  currentLocation = searchBar.value;
  const gifUrl = await searchGifs(weatherData.weatherState);
  (await domFunctions()).DOMbuild(weatherData, gifUrl, currentUnit);
  document.querySelector(
    ".current-location"
  ).textContent = `Current location: ${currentLocation} `;
  document.querySelector(".lds-ring").style.visibility = "hidden";
  document.querySelector(".container").style.opacity = "1";
});
