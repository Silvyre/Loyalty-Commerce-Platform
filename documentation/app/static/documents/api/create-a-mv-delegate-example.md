#### Example Request

    POST https://sandbox.lcp.points.com/v1/lps/<lp-id>/mv-delegates/
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "application": "https://sandbox.lcp.points.com/v1/apps/<app-id>",
      "memberValidation": {
        "balance": 2000,
        "firstName": "John",
        "lastName": "Doe",
        "memberId": "1234"
      }
    }

#### Example Response

    201 CREATED
    location: https://sandbox.lcp.points.com/v1/lps/<lp-id>/mv-delegates/<id>
    {
      "application": "https://sandbox.lcp.points.com/v1/apps/<app-id>",
      "memberValidation": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>",
      "links": {
        "self": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mv-delegates/<id>"
      }
    }

