#### Example Request

    POST https://lcp.points.com/v1/apps/
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "name": "My App",
      "description": "Description of my app"
    }

#### Example Response

    201 CREATED
    location: https://lcp.points.com/v1/apps/<id>
    {
      "createdAt": "2014-04-19T07:56:08.482556Z",
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
      ],
      "type": "app",
      "updatedAt": "2014-04-19T07:56:08.482556Z"
    }




