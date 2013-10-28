#### Example Request

    GET https://lcp.points.com/v1/apps/?macKeyIdentifier=<mac-key-id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "apps": [
        {
          "description": "Description of my app",
          "links": {
            "self": {
              "href": "https://lcp.points.com/v1/apps/<id>"
            }
          },
          "name": "My App"
        }
      ]
    }


