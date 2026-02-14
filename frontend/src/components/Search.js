import React, { useState } from "react";
import axios from "axios";

function Search({ setWeather, setLoading }) {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (!city) return;
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/weather/${city}`);
      setWeather(data);
    } catch (err) {
      alert(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="searchBar">
      <input
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
