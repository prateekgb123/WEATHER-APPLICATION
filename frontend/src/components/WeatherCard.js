import React from "react";

function WeatherCard({ data }) {
  // If no data, render nothing
  if (!data) return null;

  const iconUrl = data.icon
    ? `https://openweathermap.org/img/wn/${data.icon}@2x.png`
    : "";

  const formatTime = (unix) => {
    if (!unix) return "N/A";
    const date = new Date(unix * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <div className="card">
      <h2>
        {data.city || "Unknown"}, {data.country || ""}
      </h2>

      <div className="hero">
        {iconUrl && <img src={iconUrl} alt="icon" />}
        <div className="temp">
          {data.temperature !== undefined ? `${data.temperature}°C` : "N/A"}
        </div>
      </div>

      <p className="condition">{data.condition || "N/A"}</p>

      <div className="minmax">
        <span>⬇ {data.min ?? "N/A"}°C</span>
        <span>⬆ {data.max ?? "N/A"}°C</span>
      </div>

      <div className="grid">
        <p>🤒 Feels: {data.feelsLike ?? "N/A"}°C</p>
        <p>💧 Humidity: {data.humidity ?? "N/A"}%</p>
        <p>🌬 Wind: {data.wind ?? "N/A"} m/s</p>
        <p>📊 Pressure: {data.pressure ?? "N/A"}</p>
        <p>👁 Visibility: {data.visibility ?? "N/A"}</p>
        <p>🌅 Sunrise: {formatTime(data.sunrise)}</p>
        <p>🌇 Sunset: {formatTime(data.sunset)}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
