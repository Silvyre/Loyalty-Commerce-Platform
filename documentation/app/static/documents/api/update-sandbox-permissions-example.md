#### Example Request

    PATCH https://lcp.points.com/v1/apps/<app-id>/sandbox-permissions/<id>
    Authorization: MAC id="...", ts="...", nonce="...", ext="...", mac="..."
    {
      "operations": ["mvs", "debits", "credits"]
    }


#### Example Response

	200 OK
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








