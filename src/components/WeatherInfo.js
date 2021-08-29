import React from "react";

export default class WeatherInfo extends React.Component {
  state = {
    weather: null,
    temp: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.cityName;
    const nextName = this.props.cityName;

    if (prevName !== nextName) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${nextName}&appid=af0f9a3d3acf15b4d50d288abcbabfde&units=metric`
      )
        .then((responce) => responce.json())
        .then((weather) => this.setState({ weather, temp: weather.main.temp }));
    }
  }

  render() {
    const coldStyle = { backgroundColor: "#00ffff" };
    const middleStyle = { backgroundColor: "#fff700" };
    const hotStyle = { backgroundColor: "#ff8c00" };
    return (
      <>
        {this.state.weather && (
          <>
            {this.state.weather.weather.map(({ description, icon, main }) => (
              <div
                style={
                  Math.round(this.state.weather.main.temp) < 10
                    ? coldStyle
                    : Math.round(this.state.weather.main.temp) >= 10 &&
                      Math.round(this.state.weather.main.temp) <= 29
                    ? middleStyle
                    : hotStyle
                }
              >
                <h1>{this.state.weather.name}</h1>
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt={description}
                ></img>
                <h2>{Math.round(this.state.weather.main.temp)} °C</h2>
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
}
