import React, { useEffect, useState } from "react";
import axios from "axios";

function History({ setWeather }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data } = await axios.get("/api/weather/history/all");
      setHistory(data);
    };
    fetchHistory();
  }, []);

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString();
  };

  return (
    <div className="historySection">
      <h2>Recent Searches</h2>

      <div className="historyGrid">
        {history.map((item) => {
          const iconUrl = item.icon
            ? `https://openweathermap.org/img/wn/${item.icon}.png`
            : "";

          return (
            <div
              key={item._id}
              className="historyCard"
              onClick={() => setWeather(item)}
            >
              {iconUrl && <img src={iconUrl} alt="icon" />}

              <div className="historyInfo">
                <h4>{item.city}</h4>
                <p>{item.temperature}°C</p>
                <span>{item.condition}</span>
                <small>{formatTime(item.date)}</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default History;
