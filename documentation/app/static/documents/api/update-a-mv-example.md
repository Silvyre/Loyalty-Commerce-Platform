#### Example Request

    PATCH https://lcp.points.com/v1/lps/<lp-id>/mvs/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "order": "https://sandbox.lcp.points.com/v1/orders/<order-id>",
    }

#### Example Response

    200 OK
    {
      "application": "https://lcp.points.com/v1/apps/<app-id>",
      "balance": 2000,
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "firstName": "John",
      "lastName": "Doe",
      "links": {
        "self": {
          "href": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<id>"
        }
      },
      "loyaltyProgram": "https://lcp.points.com/v1/lps/<lp-id>",
      "memberId": "1234",
      "order": "https://sandbox.lcp.points.com/v1/orders/<order-id>",
      "status": "success",
      "type": "memberValidation",
      "updatedAt": "2014-05-08T17:55:34.511304Z"
    }







