#### Example Webhook

    {
      "orderUrl": "https://lcp.points.com/v1/orders/<id>",
      "orderStatus": "complete",
      "partnerTransactionId": "ABC123",
      "update": {  
        "resource": "https://lcp.points.com/v1/lps/<lpid>/credits/<id>",
        "status": "success",
        "type": "credit",
        "updatedAt": "2019-01-01T00:00:01.999999Z"
      }
    }
