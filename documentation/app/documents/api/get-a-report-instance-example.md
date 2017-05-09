#### Example Request

    GET https://lcp.points.com/v1/apps/<app-id>/reports/<report-id>/instances/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "contentType": "application/json",
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/apps/<app-id>/reports/<report-id>/instances/<id>"
        },
        "data": {
          "href": "https://lcp.points.com/v1/apps/<app-id>/reports/<report-id>/instances/<id>/data"
        },
        "report": {
          "href": "https://lcp.points.com/v1/apps/<app-id>/reports/<report-id>"
        }
      },
      "status": "success",
      "type": "reportInstance",
      "updatedAt": "2014-05-08T17:55:34.511304Z"
    }







