const API_KEY = "d9651da9e120d8963c030f746c41aec3";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";

function fetchWeather(query) {
  return fetch(`${url}&q=${query}&appid=${API_KEY}`).then((responce) => {
    if (responce.ok) {
      return responce.json();
    }
    return Promise.reject(new Error("No response from server"));
  });
}

const ApiServise = { fetchWeather };

export default ApiServise;
