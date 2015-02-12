#### Example Request

    POST https://sandbox.lcp.points.com/v1/orders/
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "data": {
        "callCentreTransaction": true,
        "language": "en-US"
      },
      "orderType": "BUY"
    }

#### Example Response

    201 CREATED
    location: https://sandbox.lcp.points.com/v1/orders/<id>
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
      "orderType": "BUY",
      "status": "initial",
      "type": "order",
      "updatedAt": "2014-02-26T17:47:00.000000Z",
      "updates": []
    }

