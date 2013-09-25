#### Example Request

    GET https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "balance": 2000,
      "firstName": "John",
      "lastName": "Doe",
      "links": {
        "self": {
          "href": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<id>"
        }
      },
      "memberId": "1234"
    }
