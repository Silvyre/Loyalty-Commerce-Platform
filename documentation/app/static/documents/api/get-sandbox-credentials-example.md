#### Example Request

    GET https://lcp.points.com/v1/apps/<app-id>/sandbox-credentials/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/apps/<app-id>/sandbox-credentials/<id>"
        }
      },
      "macAlgorithm": "HMAC-SHA1",
      "macKey": "<macKey>",
      "macKeyIdentifier": "<macKeyIdentifier>",
      "type": "sandboxCredential"
    }
