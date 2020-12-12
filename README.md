# Getting Started #
These steps will get this status monitor running for you using DigitalOcean.

## Requirements

* You need a DigitalOcean account. If you don't already have one, you can sign up using my referral link at https://m.do.co/c/44fe76800171

**Note: Following these steps will result in charges for the use of DigitalOcean services**

## Forking the Status Monitor

To use all the features of App Platform, you need to be running against your own copy of this application. To make a copy, click the Fork button above and follow the on-screen instructions. In this case, you'll be forking this repo as a starting point for your own app (see [Github documentation](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) to learn more about forking repos.

After forking the repo, you should now be viewing this README in your own github org (e.g. `https://github.com/<your-org>/do-status-monitor`).

## Configuration ##

Edit `config.js` to meet customize the site and services to check the status.

```javascript
export default {
  "title": "Your title",
  "description": "Demoe description.",
  "email": "t.dittmann@omniawrite.com",
  "twitter": "https://twitter.com/DittmannTorsten",
  "facebook": "",
  "services": [
    {
      "name": "DigitalOcean.com",
      "description": "DigitalOcean Website",
      "url": "https://www.digitalocean.com/", // URL to check
      "cron": "*/5 * * * *", // every 5 min (cron schedule expression)
      "status": 200, // Expected valid http status code

      // Optional
      "settings": { // You can use every settings from `fetch()` in settings
        "method": "POST",
        "headers": {
          "X-Appwrite-Project": "XXXXXXXXX",
          "X-Appwrite-key": "XXXXXXXXXX"
        }
      }
    },
    {
      //...
    }
  ]
}
```