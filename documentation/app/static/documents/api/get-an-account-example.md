#### Example Request

    GET https://lcp.points.com/v1/accounts/
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "email": "",
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/accounts/"
        },
        "friendly": {
          "href": "https://lcp.points.com/v1/accounts/"
        }
      }
    }
