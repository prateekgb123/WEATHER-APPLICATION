import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import History from "./components/History";

function App() {
  const [weather, setWeather] = useState(null);

  return (
    <div className="app">
      <h1>🌤 MERN Weather App</h1>
      <Search setWeather={setWeather} />
      {weather && <WeatherCard data={weather} />}
      <History />
    </div>
  );
}

export default App;
