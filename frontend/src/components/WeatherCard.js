import React from "react";

function WeatherCard({ data }) {
  return (
    <div className="card">
      <h2>
        {data.city}, {data.country}
      </h2>
      <h3>{data.temperature}°C</h3>
      <p>{data.condition}</p>
    </div>
  );
}

export default WeatherCard;
