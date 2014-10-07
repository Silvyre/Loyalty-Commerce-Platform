#### Example Request

    POST https://lcp.points.com/v1/accounts/
    {
      "email": "youremail@yourcompany.com",
      "firstName": "First Name",
      "lastName": "Last Name",
      "organizationName": "Company",
      "phone": "416-555-1234"
    }

#### Example Response

    201 CREATED
    location: https://lcp.points.com/v1/accounts/<id>
    {
      "accountCredentials": [
        {
          "links": {
            "self": {
              "href": "https://lcp.points.com/v1/accounts/<id>/account-credentials/<ac-id>"
            }
          },
          "macAlgorithm": "HMAC-SHA1",
          "macKey": "<macKey>",
          "macKeyIdentifier": "<macKeyIdentifier>"
        }
      ],
      "email": "youremail@yourcompany.com",
      "firstName": "First Name",
      "lastName": "Last Name",
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/accounts/<id>"
        },
        "friendly": {
          "href": "https://lcp.points.com/v1/accounts/youremail%40yourcompany.com"
        }
      },
      "organizationName": "Company",
      "phone": "416-555-1234"
    }



