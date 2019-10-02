export const fetchWeather = async ({latitude, longitude, unit}) => {
    return fetch(`/api/weather/latitude/${latitude}/longitude/${longitude}/unit/${unit}`)
        .then(response => response.json())
};