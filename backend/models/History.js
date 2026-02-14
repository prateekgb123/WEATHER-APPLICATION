const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  city: String,
  country: String,
  temperature: Number,
  feelsLike: Number,
  min: Number,
  max: Number,
  condition: String,
  humidity: Number,
  wind: Number,
  pressure: Number,
  visibility: Number,
  sunrise: Number,
  sunset: Number,
  icon: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("History", historySchema);
