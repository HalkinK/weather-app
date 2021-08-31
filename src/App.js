// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import UserLocation from "./components/UserLocation";

export default function App() {
  // state = {
  //   cityName: "",
  // };
  const [cityName, setCityName] = useState("");

  const handleFormSubmit = (cityName) => {
    setCityName(cityName);
  };

  return (
    <div className="weather-container">
      <SearchBar onSubmit={handleFormSubmit} />
      {cityName === "" && <UserLocation />}

      <WeatherInfo cityName={cityName} />
    </div>
  );
}
