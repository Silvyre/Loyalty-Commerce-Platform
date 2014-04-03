#### Example Request

    GET https://lcp.points.com/v1/apps/<app-id>/reports/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "name": "My App’s Transaction Report",
      "description": "Report on all transactions performed by my app",
      "url": "https://myapp.com/reports/report-name",
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/apps/<app-id>/reports/<id>"
        },
        "instances": {
          "href": "https://lcp.points.com/v1/apps/<app-id>/reports/<id>/instances/"
        }
      }
    }






