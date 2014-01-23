#### Example Request

    GET https://sandbox.lcp.points.com/v1/lps/<lp-id>/mv-delegates/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "application": "https://sandbox.lcp.points.com/v1/apps/<app-id>",
      "memberValidation": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>",
      "links": {
        "self": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mv-delegates/<id>"
      }
    }


