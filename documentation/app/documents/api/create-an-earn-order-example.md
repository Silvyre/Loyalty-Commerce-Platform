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
    location: https://sandbox.lcp.points.com/v1/orders/<id>
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
      "status": "initial",
      "type": "order",
      "updatedAt": "2014-02-26T17:47:00.000000Z",
      "updates": []
    }

