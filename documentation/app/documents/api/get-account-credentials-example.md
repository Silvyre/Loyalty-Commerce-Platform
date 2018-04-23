#### Example Request

    GET https://lcp.points.com/v1/accounts/<account-id>/account-credentials/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/accounts/<account-id>/account-credentials/<id>"
        }
      },
      "macKey": "<macKey>",
      "macKeyIdentifier": "<macKeyIdentifier>",
      "type": "accountCredential"
    }
