#### Example Request

    PUT https://lcp.points.com/v1/apps/<app-id>/account-permissions
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "admin": [
        "https://lcp.points.com/v1/accounts/<account-id1>",
        "https://lcp.points.com/v1/accounts/<account-id2>"
      ],
      "reports": [
        "https://lcp.points.com/v1/accounts/<account-id3>",
        "https://lcp.points.com/v1/accounts/<account-id4>"
      ],
      "support": [
        "https://lcp.points.com/v1/accounts/<account-id5>",
        "https://lcp.points.com/v1/accounts/<account-id6>"
      ]
    }

#### Example Response

    200 OK
    {
      "admin": [
        "https://lcp.points.com/v1/accounts/<account-id1>",
        "https://lcp.points.com/v1/accounts/<account-id2>"
      ],
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/apps/<app-id>/account-permissions"
        }
      },
      "reports": [
        "https://lcp.points.com/v1/accounts/<account-id3>",
        "https://lcp.points.com/v1/accounts/<account-id4>"
      ],
      "support": [
        "https://lcp.points.com/v1/accounts/<account-id5>",
        "https://lcp.points.com/v1/accounts/<account-id6>"
      ],
      "type": "accountPermission",
      "updatedAt": "2016-10-07T12:13:45.511304Z"
    }








