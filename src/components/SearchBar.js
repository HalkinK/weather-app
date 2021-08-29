import React from "react";

export default class SearchBar extends React.Component {
  state = {
    cityName: "",
  };

  handleNameChange = (event) => {
    this.setState({ cityName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.cityName.trim() === "") {
      alert("Please enter your city");
      return;
    }

    this.props.onSubmit(this.state.cityName);
    this.setState({ cityName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="cityName"
          value={this.state.cityName}
          onChange={this.handleNameChange}
        />
        <button type="submit">Show weather</button>
      </form>
    );
  }
}
