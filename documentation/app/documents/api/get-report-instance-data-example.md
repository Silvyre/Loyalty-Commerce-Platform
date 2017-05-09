#### Example Request

    GET https://lcp.points.com/v1/apps/<app-id>/reports/<report-id>/instances/<id>/data
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      <data provided by application>
    }









