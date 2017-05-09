#### Example Request

    POST https://sandbox.lcp.points.com/v1/lps/<lp-id>/mv-delegates/
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "application": "https://sandbox.lcp.points.com/v1/apps/<app-id>",
      "memberValidation": {
        "identifyingFactors": {
          "firstName": "John",
          "lastName": "Doe",
          "memberId": "1234"
        },
        "authenticatingFactors": {
          "password": "ABCD"
        }
      },
      "memberValidationResponse": {
        "balance": 2000
      }
    }

#### Example Response

    201 CREATED
    location: https://sandbox.lcp.points.com/v1/lps/<lp-id>/mv-delegates/<id>
    {
      "application": "https://sandbox.lcp.points.com/v1/apps/<app-id>",
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "memberValidation": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>",
      "links": {
        "self": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mv-delegates/<id>"
      },
      "type": "memberValidationDelegate",
      "updatedAt": "2014-04-19T07:56:08.482556Z"
    }



