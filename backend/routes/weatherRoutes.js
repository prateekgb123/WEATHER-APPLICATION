const express = require("express");
const axios = require("axios");
const History = require("../models/History");

const router = express.Router();

// Get weather by city
router.get("/:city", async (req, res) => {
  try {
    const city = req.params.city;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`;

    const { data } = await axios.get(url);

    const record = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      min: data.main.temp_min,
      max: data.main.temp_max,
      condition: data.weather[0].main,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      pressure: data.main.pressure,
      visibility: data.visibility,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      icon: data.weather[0].icon,
      date: new Date(),
    };

    // Save search history
    await History.create(record);

    res.json(record);
  } catch (error) {
    console.log(error.response?.data || error.message);
    res.status(400).json({ message: "City not found" });
  }
});

// Get all history
router.get("/history/all", async (req, res) => {
  try {
    const history = await History.find().sort({ date: -1 }).limit(10);
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch history" });
  }
});

module.exports = router;
