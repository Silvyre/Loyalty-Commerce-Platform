#### Example Request

    GET https://lcp.points.com/v1/debits/?startCreatedAt=2014-04-19T07:00:00.000000Z&endCreatedAt=2014-04-19T08:00:00.000000Z&limit=10&offset=0
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "debits" : [
        {
          "amount": 2000,
          "application": "https://lcp.points.com/v1/apps/<app-id>",
          "createdAt": "2014-04-19T07:56:08.482556Z",
          "links": {
            "self": {
              "href": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/debits/<id>"
            }
          },
          "loyaltyProgram": "https://lcp.points.com/v1/lps/<lp-id>",
          "memberValidation": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>",
          "order": "https://sandbox.lcp.points.com/v1/orders/<order-id>",
          "pic": "ABC",
          "status": "success",
          "transactionId": "<transaction-id>",
          "type": "debit",
          "updatedAt": "2014-05-08T17:55:34.511304Z"
        },
        ...
      ]
    }


