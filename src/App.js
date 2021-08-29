// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import UserLocation from "./components/UserLocation";

export default class App extends React.Component {
  state = {
    cityName: "",
  };

  handleFormSubmit = (cityName) => {
    this.setState({ cityName });
  };

  render() {
    return (
      <div className="weather-container">
        <SearchBar onSubmit={this.handleFormSubmit} />
        {this.state.cityName === "" && <UserLocation />}

        <WeatherInfo cityName={this.state.cityName} />
      </div>
    );
  }
}
