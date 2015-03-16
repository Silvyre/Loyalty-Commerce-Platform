#### Example Request

    PATCH https://lcp.points.com/v1/orders/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "status": "complete",
    }

#### Example Response

    200 OK
    {
      "application": "https://sandbox.lcp.points.com/v1/apps/<app-id>",
      "createdAt": "2014-02-26T17:47:00.000000Z",
      "data": {
        "callCentreTransaction": true,
        "language": "en-US"
      },
      "links": {
        "self": {
          "href": "https://sandbox.lcp.points.com/v1/orders/<id>"
        }
      },
      "orderType": "EXCHANGE",
      "status": "complete",
      "type": "order",
      "updatedAt": "2014-02-26T17:50:00.000000Z",
      "updates": [
        {
          "resource": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>",
          "status": "success",
          "type": "memberValidation",
          "updatedAt": "2014-02-26T17:47:30.000000Z"
        },
        {
          "resource": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/debits/<debit-id>",
          "status": "success",
          "type": "debit",
          "updatedAt": "2014-02-26T17:48:00.000000Z"
        },
        {
          "resource": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/credits/<credit-id>",
          "status": "success",
          "type": "credit",
          "updatedAt": "2014-02-26T17:49:00.000000Z"
        }
      ]
    }







