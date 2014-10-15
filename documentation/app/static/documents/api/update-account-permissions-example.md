#### Example Request

    PUT https://lcp.points.com/v1/apps/<app-id>/account-permissions
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "support": [
        "https://lcp.points.com/v1/accounts/<account-id1>",
        "https://lcp.points.com/v1/accounts/<account-id2>"
      ]
    }

#### Example Response

    200 OK
    {
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/apps/<app-id>/account-permissions"
        }
      },
      "support": [
        "https://lcp.points.com/v1/accounts/<account-id1>",
        "https://lcp.points.com/v1/accounts/<account-id2>"
      ],
      "type": "accountPermission",
      "updatedAt": "2014-05-08T17:55:34.511304Z"
    }








