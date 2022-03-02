export default async function weatherHit(location, unitState) {
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
