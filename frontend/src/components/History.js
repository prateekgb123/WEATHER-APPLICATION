import React, { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/weather/history/all"
      );
      setHistory(data);
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h2>Recent Searches</h2>
      {history.map((item) => (
        <p key={item._id}>
          {item.city} - {item.temperature}°C
        </p>
      ))}
    </div>
  );
}

export default History;
