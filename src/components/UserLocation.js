import { useState, useEffect } from "react";

export default function UserLocation() {
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const coldStyle = { backgroundColor: "#00ffff" };
  const middleStyle = { backgroundColor: "#fff700" };
  const hotStyle = { backgroundColor: "#ff8c00" };

  useEffect(() => {
    const fetchData = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    };

    if (lat && lon) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=af0f9a3d3acf15b4d50d288abcbabfde&units=metric`
      )
        .then((responce) => responce.json())
        .then((weather) => setWeather(weather))
        .catch((error) => console.warn(error));
    }
    fetchData();
  }, [lat, lon]);

  return (
    <>
      {weather && (
        <>
          {weather.weather.map(({ description, icon, main, id }) => (
            <div
              key={id}
              style={
                Math.round(weather.main.temp) < 10
                  ? coldStyle
                  : Math.round(weather.main.temp) >= 10 &&
                    Math.round(weather.main.temp) <= 29
                  ? middleStyle
                  : hotStyle
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
      )}
    </>
  );
}
