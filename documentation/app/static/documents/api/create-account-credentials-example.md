#### Example Request

    POST https://lcp.points.com/v1/accounts/<account-id>/account-credentials/
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
    }

#### Example Request

    201 CREATED
    location: https://lcp.points.com/v1/accounts/<account-id>/account-credentials/<id>
    {
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/accounts/<account-id>/account-credentials/<id>"
        }
      },
      "macAlgorithm": "HMAC-SHA1",
      "macKey": "<macKey>",
      "macKeyIdentifier": "<macKeyIdentifier>",
      "type": "accountCredential"
    }


