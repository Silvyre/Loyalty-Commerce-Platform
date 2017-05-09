#### Example Request

    GET https://lcp.points.com/v1/apps/<app-id>/reports/
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "reports": [
        {
          "createdAt": "2014-04-19T07:56:08.482556Z",
          "description": "Report on all transactions performed by my app",
          "links": {
            "self": {
              "href": "https://lcp.points.com/v1/apps/<app-id>/reports/<id>"
            },
            "instances": {
              "href": "https://lcp.points.com/v1/apps/<app-id>/reports/<id>/instances/"
            }
          },
          "name": "My App’s Transaction Report",
          "type": "report",
          "updatedAt": "2014-05-08T17:55:34.511304Z",
          "url": "https://myapp.com/reports/report-name"
        },
        ...
      ]
    }








