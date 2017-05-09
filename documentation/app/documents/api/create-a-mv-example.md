#### Example Request

    POST https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "identifyingFactors": {
        "firstName": "John",
        "lastName": "Doe",
        "memberId": "1234"
      },
      "authenticatingFactors": {
        "password": "ABCD"
      }
    }

#### Example Response

    201 CREATED
    location: https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<id>
    {
      "application": "https://lcp.points.com/v1/apps/<app-id>",
      "authenticatingFactors": {
        "password": "*****"
      },
      "balance": 2000,
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "identifyingFactors": {
        "firstName": "John",
        "lastName": "Doe",
        "memberId": "1234"
      },
      "links": {
        "self": {
          "href": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<id>"
        }
      },
      "loyaltyProgram": "https://lcp.points.com/v1/lps/<lp-id>",
      "status": "success",
      "type": "memberValidation",
      "updatedAt": "2014-04-19T07:56:08.482556Z"
    }
