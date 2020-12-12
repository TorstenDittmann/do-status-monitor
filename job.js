import fetch from "node-fetch";
import cron from "node-cron";
import state from "./state.js";

export default (config) => {
  cron.schedule(config.cron, async () => {
    const response = await fetch(config.url, {
      method: "GET",
      ...(config.settings ? config.settings : {})
    })
    state.setStatus(config.name, response.status == 200);
    console.log(`${config.name} status is ${response.status}`);
  })
}