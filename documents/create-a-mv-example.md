#### Example Request

    POST https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "firstName": "John",
      "lastName": "Doe",
      "memberId": "1234"
    }

#### Example Response

    201 CREATED
    location: https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<id>
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
