#### Example Request

    POST https://sandbox.lcp.points.com/v1/lps/<lp-id>/debit-order/
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "amount": 100,
      "memberValidation": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>",
      "pic": "ABC",
      "data": {
        "someKey": "someValue"
      }
    }

#### Example Response

    201 CREATED
    {
      "confirmationNumber": "3902-2266-8404-8538-1721",
      "loyaltyProgram": "https://lcp.points.com/v1/lps/<lp-id>",
      "order": "https://sandbox.lcp.points.com/v1/orders/<id>",
      "orderDetails": {
        "basePoints": 1000,
        "pics": {
          "base": "ABC"
        },
        "someKey": "someValue"
      },
      "status": "complete",
      "user": {
        "email": "jdoe@example.com",
        "firstName": "John"
        "lastName": "Doe",
        "memberId": "1234"
      }
    }
