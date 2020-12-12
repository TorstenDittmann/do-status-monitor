module.exports = {
  "title": "Demo Title",
  "services": [
    {
      "name": "Frontend",
      "url": "https://app.omniawrite.com",
      "cron": "*/10 * * * * *",
      "settings": {
        "method": "GET"
      }
    },
    {
      "name": "Backend",
      "url": "https://shelf.omniawrite.com/v1/health",
      "cron": "*/10 * * * * *",
      "settings": {
        "method": "GET",
        "headers": {
          "X-Appwrite-Project": "5e890a780e6b2",
          "X-Appwrite-key": "44949a5337668d4120a5ed642bf7c0f2909b5787eb3c514dcf7dd488842a0120fc2898f58fe51956261b4d84a9715853c80facce2de98338b6c720d61f73884d39d85f7b54e52b432a3fc01b8deb9422299a78156f9df5de7654fd8bb567c4964be5df653adeb6d06d56d28bfc608d6d06dcf24210ac66c133fd14b52ac1ed33"
        }
      }
    }
  ]
}