export default {
  "title": "do-status-monitor",
  "description": "Is your website online? Is your backend still up? Let’s see! Monitor any specific website or API you want.",
  "email": "t.dittmann@omniawrite.com",
  "twitter": "https://twitter.com/DittmannTorsten",
  "facebook": "",
  "services": [
    {
      "name": "DigitalOcean Frontend",
      "url": "https://www.digitalocean.com/",
      "description": "DigitalOcean Website",
      "cron": "* * * * *",
      "status": 200
    },
    {
      "name": "Broken Website Frontend",
      "url": "https://thiswillalwaybeoffline.cool",
      "description": "This service is always broken 😿",
      "cron": "* * * * *",
      "status": 200
    },
    {
      "name": "OmniaWrite Backend",
      "url": "https://app.omniawrite.com/api/templates",
      "description": "Backend of OmniaWrite.",
      "cron": "* * * * *",
      "status": 200,
      "settings": {
        "method": "GET",
        "headers": {
          "X-Appwrite-Project": "XXXXXXXXX",
          "X-Appwrite-key": "XXXXXXXXXX"
        }
      }
    }
  ]
}
