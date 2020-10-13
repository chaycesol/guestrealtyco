const settings = {
  "name": "guestrealtyco",
  "state": {
    "frontity": {
      "url": "http://guestrealty.co",
      "title": "Guest Realty",
      "description": "Guest Realty is a Vacation and Residential Short-Term Long-Term Property Management Sydney Bondi Beach Australia"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About",
              "/about/about/"
            ],
            [
              "For Property Owners",
              "/sub/property-owners/"
            ],
            [
              "For Renters",
              "/sub/for-renters/"
            ],
            [
              "Blog",
              "/blog/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://guestrealty.co/wp-json",
          "homepage": "/home",
          "postTypes": [
            {
              type: "sub",
              endpoint: "sub"
            }
          ],
          taxonomies: [
            {
              taxonomy: "subs",
              endpoint: "sub",
              postTypeEndpoint: "sub"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
