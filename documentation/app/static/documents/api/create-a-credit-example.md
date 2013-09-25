#### Example Request

    POST https://sandbox.lcp.points.com/v1/lps/<lp-id>/credits/
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "amount": 2000,
      "memberValidation": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>"
    }

#### Example Response

    201 CREATED
    location: https://sandbox.lcp.points.com/v1/lps/<lp-id>/credits/<id>
    {
      "amount": 2000,
      "links": {
        "self": {
          "href": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/credits/<id>"
        }
      },
      "memberValidation": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>",
      "status": "success",
      "transactionId": "<transaction-id>"
    }
