#### Example Request

    PATCH https://lcp.points.com/v1/lps/<lp-id>/credits/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "status": "success",
      "transactionId": "15786560"
    }

#### Example Response

    200 OK
    {
      "amount": 2000,
      "application": "https://lcp.points.com/v1/apps/<app-id>",
      "claimCode": "TZ9E-9YHMHU-PDEE",
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "creditType": "base",
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/lps/<lp-id>/credits/<id>"
        }
      },
      "loyaltyProgram": "https://lcp.points.com/v1/lps/<lp-id>",
      "memberValidation": "https://lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>",
      "order": "https://sandbox.lcp.points.com/v1/orders/<order-id>",
      "pic": "ABC",
      "status": "success",
      "transactionId": "15786560",
      "type": "credit",
      "updatedAt": "2014-05-08T17:55:34.511304Z"
    }







