export default {
  "title": "Demo Title",
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur cupiditate accusamus voluptatem fugiat aut quam cumque voluptas vero, reprehenderit iure, repudiandae tenetur molestias aliquid praesentium. Iusto odit nihil ad?",
  "email": "t.dittmann@omniawrite.com",
  "twitter": "https://twitter.com/DittmannTorsten",
  "facebook": "",
  "services": [
    {
      "name": "DigitalOcean.com",
      "url": "https://www.digitalocean.com/",
      "description": "DigitalOcean Website",
      "cron": "* * * * *",
      "status": 200
    },
    {
      "name": "Bad service",
      "url": "https://123414sdf.com",
      "description": "This service is always broken 😿",
      "cron": "* * * * *",
      "status": 200
    },
    {
      "name": "Backend",
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