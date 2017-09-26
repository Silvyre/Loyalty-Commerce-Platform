#### Example Request

    PUT https://lcp.points.com/v1/apps/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "name": "Sample App,
      "description": "Updated app description."
    }

#### Example Response

    200 OK
    {
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "description": "Updated app description",
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/apps/<id>"
        },
        "reports": {
          "href": "https://lcp.points.com/v1/apps/<id>/reports/"
        }
      },
      "liveCredentials": [],
      "name": "Sample App",
      "sandboxCredentials": [
        "https://lcp.points.com/v1/apps/<id>/sandbox-credentials/<sc-id>"
      ],
      "type": "app",
      "updatedAt": "2016-10-10T14:27:22.482556Z"
    }








