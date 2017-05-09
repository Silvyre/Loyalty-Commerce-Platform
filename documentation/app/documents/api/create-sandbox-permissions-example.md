#### Example Request

	POST https://lcp.points.com/v1/apps/<app-id>/sandbox-permissions/
	Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
	{
	  "loyaltyProgram": "https://lcp.points.com/v1/lps/<lp-id>",
	  "operations": ["mvs", "debits", "credits"]
	}

#### Example Response

    201 CREATED
    location: https://lcp.points.com/v1/apps/<app-id>/sandbox-permissions/<id>
    {
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/apps/<app-id>/sandbox-permissions/<id>"
        }
      },
      "loyaltyProgram": "https://lcp.points.com/v1/lps/<lp-id>",
      "operations": ["mvs", "debits", "credits"],
      "type": "sandboxPermission"
    }


