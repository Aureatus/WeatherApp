// Fetch gif with weatherState as the search argument.

export default async function searchGifs(weatherState) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=l9YxwMKg1Scs9CmGIni3C62irA8vpzCF&s=${weatherState} weather&weirdness=0`,
      { mode: "cors" }
    );
    const gifData = await response.json();
    const gifUrl = gifData.data.images.original.url;
    return gifUrl;
  } catch (err) {
    return err;
  }
}
