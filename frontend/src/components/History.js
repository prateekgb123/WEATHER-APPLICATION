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

  return (
    <div>
      <h2>Recent Searches</h2>
      {history.map((item) => (
        <div
          key={item._id}
          className="historyItem"
          onClick={() => setWeather(item)}
        >
          {item.city} - {item.temperature}°C
        </div>
      ))}
    </div>
  );
}

export default History;
