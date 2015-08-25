#### Example Object

    {
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "presentation": {
        "labels": {
          "identifyingFactors.firstName": {
            "en": "First Name"
          },
          "identifyingFactors.lastName": {
            "en": "Last Name"
          },
          "identifyingFactors.memberId": {
            "en": "Membership Number"
          },
          "authenticatingFactors.password": {
            "en": "Password"
          }
        },
        "order": ["identifyingFactors.firstName", "identifyingFactors.lastName", "identifyingFactors.memberId", "authenticatingFactors.password"]
      },
      "schema": {
        "type": "object",
        "properties": {
          "identifyingFactors": {
            "type": "object",
            "properties": {
              "firstName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 100
              },
              "lastName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 100
              },
              "memberId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 100
              }
            },
            "required": ["firstName", "lastName", "memberId"],
            "additionalProperties": false
          },
          "authenticatingFactors": {
            "type": "object",
            "properties": {
              "password": {
                "type": "string",
                "minLength": 1,
                "maxLength": 100
              }
            },
            "required": ["password"],
            "additionalProperties": false
          }
        },
        "required": ["identifyingFactors", "authenticatingFactors"],
        "additionalProperties": false
      },
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/lps/<lp-id>/mvs/metadata/schema"
        }
      },
      "type": "memberValidationRequestSchema",
      "updatedAt": "2014-05-08T17:55:34.511304Z"
    }

