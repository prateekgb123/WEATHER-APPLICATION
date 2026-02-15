import React, { useState } from "react";
import "./App.css";

import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import History from "./components/History";
import Loader from "./components/Loader";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="app">
      <h1 className="title">🌤 Weather App</h1>

      {/* Search */}
      <Search setWeather={setWeather} setLoading={setLoading} />

      {/* Loader */}
      {loading && <Loader />}

      {/* Weather display */}
      {!loading && weather && <WeatherCard data={weather} />}

      {/* History */}
      <History setWeather={setWeather} />
    </div>
  );
}

export default App;
