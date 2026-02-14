import React, { useState } from "react";
import axios from "axios";

function Search({ setWeather }) {
  const [city, setCity] = useState("");

  const searchWeather = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/weather/${city}`
      );
      setWeather(data);
    } catch (error) {
      alert("City not found");
    }
  };

  return (
    <div>
      <input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={searchWeather}>Search</button>
    </div>
  );
}

export default Search;
