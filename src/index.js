import "normalize.css";
import "./style.css";
import requiredWeatherData from "./modules/weather";
import searchGifs from "./modules/giphy";

let currentLocation = "Mali";
const currentUnit = "metric";

const form = document.forms[0];
const searchBar = document.querySelector(".city-search");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  currentLocation = searchBar.value;
  const weatherData = await requiredWeatherData(currentLocation, currentUnit);
  console.log(weatherData);
  const gifUrl = await searchGifs(weatherData.weatherState);
  console.log(gifUrl);
});
