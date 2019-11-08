const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Light = require("./models/light");

require("dotenv").config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/api/nights", (req, res) => {
  Light.find({}, (err, lights) => {
    if (err) throw err;

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(lights));
  });
});

app.get("/api/nights/:year", (req, res) => {
  const { year } = req.params;

  Light.find({ year }, (err, lights) => {
    if (err) throw err;

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(lights));
  });
});

app.get("/api/nights/:year/:month", (req, res) => {
  const { year, month } = req.params;

  Light.find({ year, month }, (err, lights) => {
    if (err) throw err;

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(lights));
  });
});

app.get("/api/nights/:year/:month/:day", (req, res) => {
  const { year, month, day } = req.params;

  Light.findOne({ year, month, day }, (err, lights) => {
    if (err) throw err;

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(lights));
  });
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
