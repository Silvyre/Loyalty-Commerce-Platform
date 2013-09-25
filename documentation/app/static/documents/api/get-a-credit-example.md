#### Example Request

    GET https://sandbox.lcp.points.com/v1/lps/<lp-id>/credits/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
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
