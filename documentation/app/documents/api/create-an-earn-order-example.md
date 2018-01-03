#### Example Request

    POST https://sandbox.lcp.points.com/v1/lps/<lp-id>/earn/
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "amount": 100,
      "memberValidation": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>",
      "pic": "ABC",
      "data": {
        "anyKey": "anyValue"
      }
    }

#### Example Response

    201 CREATED
    {
      "order": "https://lcp.points.com/v1/orders/<id>",
      "confirmationNumber": "3902-2266-8404-8538-1721",
      "status": "success",
      "loyaltyProgram": "https://lcp.points.com/v1/lps/<lp-id>",
      "orderDetails": {
        "basePoints": 1000,
        "pics": {
          "base": "ABC"
        }
    }
      "user": {
        "email": "jdoe@example.com",
        "firstName": "John"
        "lastName": "Doe",
	    "memberId": "1234"
      }
    }
