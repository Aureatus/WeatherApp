import "normalize.css";
import "./style.css";
import requiredWeatherData from "./modules/weather";
import searchGifs from "./modules/giphy";
import domFunctions from "./modules/DOM";

let currentLocation = "Mali";
const currentUnit = "metric";

const form = document.forms[0];
const searchBar = document.querySelector(".city-search");

(async function initial() {
  currentLocation = "London";
  const weatherData = await requiredWeatherData(currentLocation, currentUnit);
  const gifUrl = await searchGifs(weatherData.weatherState);
  (await domFunctions()).DOMbuild(weatherData, gifUrl);
})();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  currentLocation = searchBar.value;
  const weatherData = await requiredWeatherData(currentLocation, currentUnit);
  const gifUrl = await searchGifs(weatherData.weatherState);
  (await domFunctions()).DOMbuild(weatherData, gifUrl);
});
