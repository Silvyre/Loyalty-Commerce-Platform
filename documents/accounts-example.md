#### Example Object

    {
      "accountCredentials": [
        {
          "links": {
            "self": {
              "href": "https://lcp.points.com/v1/accounts/<id>/account-credentials/<ac-id>"
            }
          },
          "macAlgorithm":"HMAC-SHA1",
          "macKey":"<macKey>",
          "macKeyIdentifier":"<macKeyIdentifier>"
        }
      ],
      "email": "<email>",
      "links": {
          "self": {
            "href": "https://lcp.points.com/v1/accounts/<id>"
          },
          "friendly": {
            "href": "https://lcp.points.com/v1/accounts/<email>"
          }
      }
    }
