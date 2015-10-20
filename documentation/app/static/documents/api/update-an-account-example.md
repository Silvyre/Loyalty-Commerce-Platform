#### Example Request

    PATCH https://lcp.points.com/v1/accounts/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "firstName": "First Name",
      "lastName": "Last Name",
      "organizationName": "Company",
      "phone": "416-555-1234",
      "timeZone": "America/Toronto"
    }

#### Example Response

    200 OK
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
      "createdAt": "2014-04-19T07:56:08.482556Z",
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
      "phone": "416-555-1234",
      "roles": [
        "appDeveloper"
      ],
      "timeZone": "America/Toronto",
      "type": "account",
      "updatedAt": "2014-05-08T17:55:34.511304Z"
    }

