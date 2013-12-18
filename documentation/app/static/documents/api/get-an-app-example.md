#### Example Request

    GET https://lcp.points.com/v1/apps/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "description": "Description of my app",
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/apps/<id>"
        }
      },
      "liveCredentials": [],
      "name": "My App",
      "sandboxCredentials": [
        "https://lcp.points.com/v1/apps/<id>/sandbox-credentials/<sc-id>"
      ]
    }


