import express from "express";
import morgan from "morgan";
import setupJob from "./job.js";
import config from "./config.js";
import state from "./state.js";

const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "pug");
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.render("index", {
    config: config,
    services: state.services,
  });
});

app.get("/api", (req, res) => {
  res.json(state.services);
});

app.listen(port, () => {
  config.services.forEach(setupJob);
  console.log(`Uptime Monitor started on port ${port}!`);
});

config.services.forEach((service) => {
  state.services.push({
    ...service,
    status: null,
    lastCheck: null,
  });
});
