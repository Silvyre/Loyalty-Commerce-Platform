#### Example Object

    {
      "accountCredentials": [
        {
          "links": {
            "self": {
              "href": "https://lcp.points.com/v1/accounts/<id>/account-credentials/<ac-id>"
            }
          },
          "macKey": "<macKey>",
          "macKeyIdentifier": "<macKeyIdentifier>"
        }
      ],
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "email": "youremail@yourcompany.com",
      "firstName": "First Name",
      "lastName": "Last Name",
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/accounts/<id>"
        },
        "friendly": {
          "href": "https://lcp.points.com/v1/accounts/youremail%40yourcompany.com"
        }
      },
      "organizationName": "Company",
      "phone": "416-555-1234",
      "roles": [
        {
          "role": "https://lcp.points.com/v1/roles/application-developer"
        },
        {
          "role": "https://lcp.points.com/v1/roles/report-viewer",
          "loyaltyProgram": "https://lcp.points.com/v1/lps/<lp-id>"
        }
      ],
      "timeZone": "America/Toronto",
      "type": "account",
      "updatedAt": "2014-05-08T17:55:34.511304Z"
    }



