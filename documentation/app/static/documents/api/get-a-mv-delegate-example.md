#### Example Request

    GET https://sandbox.lcp.points.com/v1/lps/<lp-id>/mv-delegates/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "application": "https://sandbox.lcp.points.com/v1/apps/<app-id>",
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "memberValidation": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mvs/<mv-id>",
      "links": {
        "self": "https://sandbox.lcp.points.com/v1/lps/<lp-id>/mv-delegates/<id>"
      },
      "type": "memberValidationDelegate",
      "updatedAt": "2014-05-08T17:55:34.511304Z"
    }


