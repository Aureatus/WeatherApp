export default async function searchGifs(weatherState) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=l9YxwMKg1Scs9CmGIni3C62irA8vpzCF&s=${weatherState} weather&weirdness=2`
  );
  const gifData = await response.json();
  const gifUrl = gifData.data.url;
  return gifUrl;
}
