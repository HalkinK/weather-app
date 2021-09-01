import { useState, useEffect } from "react";
import { colorOptions } from "./ColorsBase";
import styles from "./ColorsOptions.module.css";

export default function WeatherInfo({ cityName }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!cityName) {
      return;
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=af0f9a3d3acf15b4d50d288abcbabfde&units=metric`
    )
      .then((responce) => responce.json())
      .then((weather) => setWeather(weather))
      .catch((error) => {
        alert("Please enter valid city name");
        document.location.reload();
      });
  }, [cityName]);

  return (
    <>
      {weather?.weather?.map(({ description, icon, main, id }) => (
        <div
          key={id}
          style={
            Math.round(weather.main.temp) < -10
              ? styles.coldStyle
              : Math.round(weather.main.temp) >= -10 &&
                Math.round(weather.main.temp) <= 30
              ? colorOptions.find(
                  (el) => el.temp === Math.round(weather.main.temp)
                )
              : styles.hotStyle
          }
        >
          <h1>{weather.name}</h1>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
          ></img>
          <h2>{Math.round(weather.main.temp)} °C</h2>
          <p>
            {main}: {description}
          </p>
        </div>
      ))}
    </>
  );
}
