const express = require("express");
const axios = require("axios");
const History = require("../models/History");

const router = express.Router();

router.get("/:city", async (req, res) => {
  try {
    const city = req.params.city;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`;

    const { data } = await axios.get(url);

    const record = await History.create({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      condition: data.weather[0].main,
    });

    res.json(record);
  } catch (error) {
    res.status(400).json({ message: "City not found" });
  }
});

router.get("/history/all", async (req, res) => {
  const history = await History.find().sort({ date: -1 });
  res.json(history);
});

module.exports = router;
