const express = require("express");
const morgan = require("morgan");
const setupJob = require("./job.js");
const config = require("./config.js");
const state = require("./state.js");

const port = process.env.PORT || 3000;
const app = express();
app.set("view engine", "pug");
app.use(morgan("common"))

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!", services: state.services })
})

app.get("/api", (req, res) => {
  res.json(state.services);
});

app.listen(port, () => {
  config.services.forEach(setupJob);
  console.log(`Uptime Monitor started on port ${port}!`)
});

config.services.forEach(service => {
  state.services.push({
    name: service.name,
    status: null,
    lastCheck: null
  })
});