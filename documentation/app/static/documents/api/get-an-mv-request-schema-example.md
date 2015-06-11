#### Example Request

    GET https://lcp.points.com/v1/lps/<lp-id>/mvs/metadata/schema
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."

#### Example Response

    200 OK
    {
      "createdAt": "2014-04-19T07:56:08.482556Z",
      "presentation": {
        "labels": {
          "firstName": {
            "en": "First Name"
          },
          "lastName": {
            "en": "Last Name"
          },
          "memberId": {
            "en": "Membership Number"
          },
          "password": {
            "en": "Password"
          }
        },
        "order": ["firstName", "lastName", "memberId", "password"]
      },
      "schema": {
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
          },
          "password": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          }
        },
        "required": ["firstName", "lastName", "memberId"],
        "additionalProperties": false
      },
      "type": "memberValidationRequestSchema",
      "updatedAt": "2014-05-08T17:55:34.511304Z"
    }


