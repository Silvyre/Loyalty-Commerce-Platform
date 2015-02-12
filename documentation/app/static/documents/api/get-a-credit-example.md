#### Example Request

    GET https://sandbox.lcp.points.com/v1/lps/<lp-id>/credits/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "amount": 2000,
      "application": "https://lcp.points.com/v1/apps/<app-id>",
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "links": {
        "self": {
          "href": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/credits/<id>"
        }
      },
      "loyaltyProgram": "https://lcp.points.com/v1/lps/<lp-id>",
      "memberValidation": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>",
      "order": "https://sandbox.lcp.points.com/v1/orders/<order-id>",
      "status": "success",
      "transactionId": "<transaction-id>",
      "type": "credit",
      "updatedAt": "2014-05-08T17:55:34.511304Z"
    }


