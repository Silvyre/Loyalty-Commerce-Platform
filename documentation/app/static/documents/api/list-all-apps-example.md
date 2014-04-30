#### Example Request

    GET https://lcp.points.com/v1/apps/?limit=10&offset=0
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
            },
            "reports": {
              "href": "https://lcp.points.com/v1/apps/<id>/reports/"
            }
          },
          "liveCredentials": [],
          "name": "My App",
          "sandboxCredentials": [
            "https://lcp.points.com/v1/apps/<id>/sandbox-credentials/<sc-id>"
          ]
        },
        ...
      ]
    }




