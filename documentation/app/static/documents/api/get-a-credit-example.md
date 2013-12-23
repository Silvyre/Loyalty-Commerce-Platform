#### Example Request

    GET https://sandbox.lcp.points.com/v1/lps/<lp-id>/credits/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "amount": 2000,
      "billingInfo": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com",
        "street1": "171 John St.",
        "street2": "",
        "city": "Toronto",
        "state": "ON",
        "country": "CA",
        "zip": "M5T 1X3",
        "phone": "4165551234"
      },
      "clientIpAddress": "1.2.3.4",
      "clientUserAgent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64;",
      "links": {
        "self": {
          "href": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/credits/<id>"
        }
      },
      "memberValidation": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>",
      "status": "success",
      "transactionId": "<transaction-id>"
    }


