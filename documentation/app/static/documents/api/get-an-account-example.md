#### Example Request

    GET https://lcp.points.com/v1/accounts/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

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
      "email": "<email>",
      "firstName": "<firstName>",
      "lastName": "<lastName>",
      "links": {
          "self": {
            "href": "https://lcp.points.com/v1/accounts/<id>"
          },
          "friendly": {
            "href": "https://lcp.points.com/v1/accounts/<email>"
          }
      },
      "organizationName": "<organizationName>",
      "phone": "<phone>",
      "roles": [
        "appDeveloper"
      ],
      "type": "account",
      "updatedAt": "2014-05-08T17:55:34.511304Z"
    }

