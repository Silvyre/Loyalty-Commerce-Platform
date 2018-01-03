#### Example Object

    {
      "application": "https://lcp.points.com/v1/apps/<app-id>",
      "confirmationNumber": "3902-2266-8404-8538-1721",
      "createdAt": "2018-01-01T07:56:08.482556Z",
      "data": {
         "loyaltyProgram": "https://lcp.points.com/v1/lps/<lp-id>",
         "orderDetails": {
            "basePoints": 1000,
            "pics": {
               "base": "ABC"
            },
            "someKey": "someValue"
         },
         "user": {
            "email": "jdoe@example.com",
            "firstName": "John"
            "lastName": "Doe",
            "memberId": "1234"
         }
      },
      "fulfillment": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/earn/",
      "creditType": "base",
      "links": {
         "self": {
            "href": "https://sandbox.lcp.points.com/v1/orders/<id>"
        }
      },
      "orderType": "EARN",
      "status": "success",
      "type": "order",
      "updatedAt": "2018-01-01T17:55:34.511304Z",
      "updates": [
         {
            "resource": "https://sandbox.lcp.points.com/v1/lps/<lpid>/mvs/<id>",
            "status": "success",
            "type": "memberValidation",
            "updatedAt": "2018-01-01T07:56:06.482556Z"
         },
         {
            "resource": "https://sandbox.lcp.points.com/v1/lps/<lpid>/credits/<id>",
            "status": "success",
            "type": "credit",
            "updatedAt": "2018-01-01T07:56:10.482556Z"
         }
      ]
    }
