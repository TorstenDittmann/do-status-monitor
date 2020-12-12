const fetch = require("node-fetch");
const cron = require("node-cron");
const state = require("./state.js");

module.exports = (config) => {
  cron.schedule(config.cron, async () => {
    const response = await fetch(config.url, {
      method: "GET",
      ...(config.settings ? config.settings : {})
    })
    state.setStatus(config.name, response.status == 200);
    console.log(`${config.name} status is ${response.status}`);
  })
}