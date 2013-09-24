#### Example Request

    GET https://lcp.points.com/v1/apps/<app-id>/live-credentials/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/apps/<app-id>/live-credentials/<id>"
        }
      },
      "macAlgorithm": "HMAC-SHA1",
      "macKey": "<macKey>",
      "macKeyIdentifier": "<macKeyIdentifier>"
    }
