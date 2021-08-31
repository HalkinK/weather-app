import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [cityName, setCityName] = useState("");

  const handleNameChange = (event) => {
    setCityName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cityName.trim() === "") {
      alert("Please enter your city");
      return;
    }

    onSubmit(cityName);
    setCityName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cityName"
        value={cityName}
        onChange={handleNameChange}
      />
      <button type="submit">Show weather</button>
    </form>
  );
}
