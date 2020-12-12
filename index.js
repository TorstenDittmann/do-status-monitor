import express from "express";
import setupJob from "./job.js";
import config from "./config.js";
import state from "./state.js";


const app = express();
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!', services: state.services })
})

app.get("/api", (req, res) => {
  res.json(state.services);
});

app.listen(3000, () => {
  config.services.forEach(setupJob);
});

config.services.forEach(service => {
  state.services.push({
    name: service.name,
    status: null,
    lastCheck: null
  })
});