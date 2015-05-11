#### Example Request

    GET https://lcp.points.com/v1/lps/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "creditType": "combinedBaseBonus",
      "links": {
        "credits": {
          "href": "https://lcp.points.com/v1/lps/<id>/credits/"
        },
        "debits": {
          "href": "https://lcp.points.com/v1/lps/<id>/debits/"
        },
        "memberValidations": {
          "href": "https://lcp.points.com/v1/lps/<id>/mvs/"
        },
        "self": {
          "href": "https://lcp.points.com/v1/lps/<id>"
        }
      },
      "name": "Flying Club",
      "partnerId": "GuYN",
      "partnerName": {
        "en": "Virgin Atlantic"
      },
      "rewardCurrency": "miles",
      "type": "loyaltyProgram",
      "updatedAt": "2014-05-08T17:55:34.511304Z"
    }




