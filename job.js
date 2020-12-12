import fetch from "node-fetch";
import cron from "node-cron";
import state from "./state.js";

export default (config) => {
  runJob(config);
  cron.schedule(config.cron, () => runJob(config));
}

const runJob = async config => {
  try {
    const start = new Date();
    const response = await fetch(config.url, {
      method: "GET",
      ...(config.settings ? config.settings : {})
    })
    const timeTaken = (new Date())-start;
    state.setStatus(config.name, response.status == config.status, timeTaken);
  } catch (error) {
    state.setStatus(config.name, false);
  }
}