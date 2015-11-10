#### Example Request

    GET https://lcp.points.com/v1/apps/<app-id>/sandbox-permissions/
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "sandbox-permissions": [
        {
          "links": {
            "self": {
              "href": "https://lcp.points.com/v1/apps/<app-id>/sandbox-permissions/<id>"
            }
          },
          "loyaltyProgram": "https://lcp.points.com/v1/lps/<lp-id>",
          "operations": ["mvs", "debits", "credits"],
          "type": "sandboxPermission"
        },
        ...
      ]
    }


