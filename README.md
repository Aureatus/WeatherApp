# Weather App

WeatherApp for the odin project. It will utilise openWeather API on it's free plan and potentially the giphy API for custom gifs related to the weather. I also plan to use promises and async/ await a large amount in this project.

## PLAN

1. Set up base project using webpack, ESlint, prettier, and normalize CSS.
    - Make sure that the webpack has error handling set up properly, and that it is set up properly to detect the stylesheet.
    - Ensure .gitignore is updated to include the dist directory.

2. Write functions that hit the openWeather API. The functions for weather will need to take a location as an input and return the weather data for that location. Console.log() the data to make sure they all work properly.
    - Refer to the practiceProject created during the API lesson.
    - Have these functions contained in a module exclusively for API hitting.

3. Write functions to process the JSON data that is recieved from the openWeather API and return only the data that is needed for the weather app.

4. Set up a form to allow users to input location, then fetch the weather info for what they've inputted. 

5. Display the weather data onto the webpage.

6. Style the page.
