#### Example Object


    {
      "sandboxResponses": [
        {
          "request": {
            "identifyingFactors": {
              "firstName": "Tony",
              "lastName": "Smith",
              "memberId": "99999999"
            },
            "authenticatingFactors": {
              "password": "PASSWORD"
            }
          },
          "response": {
             "error": "INVALID_UPSTREAM_RESPONSE"
          }
        },
        {
          "request": {
            "identifyingFactors": {
              "firstName": "Joe",
              "lastName": "Smith",
              "memberId": "12345678"
            },
            "authenticatingFactors": {
              "password": "ABCDEFGH"
            }
          },
          "response": {
            "balance": 205123
          }
        },
        ...
      ],
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/lps/<lp-id>/mvs/metadata/sandbox-responses"
        }
      }
    }

