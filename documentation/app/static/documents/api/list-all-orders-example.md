#### Example Request

    GET https://sandbox.lcp.points.com/v1/search/orders/?limit=10&offset=0&q=orderType:EXCHANGE_CREDIT
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "orders" : [
        {
          "application": "https://sandbox.lcp.points.com/v1/apps/<app-id>",
          "confirmationNumber": "3902-2266-8404-8538-1721",
          "createdAt": "2014-02-26T17:47:00.000000Z",
          "data": {
            "clientIpAddress": "127.0.0.1", 
            "clientUserAgent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:42.0) Gecko/20100101 Firefox/42.0", 
            "language": "en-US", 
            "orderDetails": {
              "basePoints": 2000, 
              "loyaltyProgram": "https://sandbox.lcp.points.com/v1/lps/<lp-id>"
            }, 
            "user": {
              "email": "jdoe@example.com",
              "firstName": "John", 
              "lastName": "Doe", 
              "memberId": "1234", 
              "memberValidation": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>"
            }
          },
          "links": {
            "self": {
              "href": "https://sandbox.lcp.points.com/v1/orders/<id>"
            }
          },
          "orderType": "EXCHANGE_CREDIT",
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
              "resource": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/credits/<credit-id>",
              "status": "success",
              "type": "credit",
              "updatedAt": "2014-02-26T17:49:00.000000Z"
            }
          ]
        },
        ...
      ]
    }


