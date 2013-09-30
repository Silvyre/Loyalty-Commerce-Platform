# LCP Reference Manual
For Points Loyalty Commerce Platform - Version 1.0

## Document Overview

This document contains an in-depth description of the Points Loyalty Commerce
Platform (LCP). You will find below descriptions of the platform,
authentication, and error codes. This document assumes have read the [LCP Getting
Started Guide for Developers](index.html). For a detailed description of the API, see the [LCP
API Reference](index.html?doc=api-reference).

## Sandbox vs Live

The LCP operates in two modes: sandbox mode and live mode. Sandbox mode is
accessed at `https://sandbox.lcp.points.com` while live mode is accessed at
`https://lcp.points.com`. Each has a separate set of credentials for
authentication. When you create an application, you will get a set of sandbox
credentials for use in the sandbox environment. Live mode credentials are issued
by Points when you’re ready to deploy your application.

Use sandbox mode during development and to test your application. In the
Sandbox, you can test your application against one or more loyalty programs
without affecting live member accounts of the loyalty programs. Sandbox mode
never affects member accounts; all operations are simulated. The API reference
describes how to simulate different success and failure conditions in sandbox
mode that your app will experience in live mode.

To go live, you’ll need to request live credentials from Points. Once your
receive them, you’ll need to update your application to use the live credentials
and the live endpoint located at `https://lcp.points.com`. Only Live credentials
have permission to access this endpoint. Once in the live environment, we
recommend you run additional tests using live test accounts for each of the
loyalty programs your app interacts.

## Versioning

The LCP uses version numbering in the URI. To access the version of the API
described in this document use `https://sandbox.lcp.points.com/v1/` or
`https://lcp.points.com/v1/`. New versions will be created for backwards
incompatible changes to the API. We will notify you of new versions of the API
and give you time to transition to the new version before discontinuing support
for the old version.

## Multiple Data Centers

The LCP is a high availability service operating in multiple data centers
globally. The platform is designed to maximize availability and scalability but
understanding how the LCP works will ensure your Application knows what to
expect.

Requests to the LCP are routed to the closest data center. Unless that data
center fails or you change geographies (significantly) your requests will
continue to be routed to the same data center. Requests that change data in one
data center are replicated to the other data centers. Replication happens
quickly and in the background so as not to delay processing of your requests.
Since your requests typically hit the same data center, replication is generally
invisible to your application. This characteristic of the LCP is called eventual
consistency. For more background information on this topic please reference
[Eventually Consistent -
Revisited](http://www.allthingsdistributed.com/2008/12/eventually_consistent.html).

In the unlikely event of a data center failing, the LCP will automatically
failover to a secondary data center. This may result in recently created
resources not being immediately available in the data center to which you fail
over until replication has completed. To get started don't worry about this
failure scenario. However, keep in mind that you in rare instances, you may need
to wait and resend your request to access recently created or modified data.

## Authorization

The LCP uses OAuth 2.0 Message Authentication Code (MAC) Tokens to authenticate
requests to the platform. This version of the LCP API matches [draft 02 of the
OAuth 2.0 MAC Token
specification](http://tools.ietf.org/html/draft-ietf-oauth-v2-http-mac-02). We
have provided a set of [LCP Client
Utilities](https://github.com/Points/Loyalty-Commerce-Platform/tree/master/util)
to help you get started with OAuth 2.0 MAC authentication.

### Types of Credentials

There are three types of MAC credentials used in the LCP:

1. [Account credentials](index.html?doc=api-reference#account-credentials) are
   used to authenticate you when accessing `/accounts` and
   `/apps` resources. Account credentials are created automatically when you
   create an account.
1. [Sandbox credentials](index.html?doc=api-reference#sandbox-credentials) are
   used by your app to authenticate its requests to the `/lps` resource in the
   sandbox environment. Sandbox credentials are created automatically when you
   create an app.
1. [Live credentials](index.html?doc=api-reference#live-credentials) are used by
   your app to authenticate its requests to the `/lps` resource in the live
   environment. Live credentials are managed by Points.

Each set of credentials include a MAC key identifier, a MAC key and a MAC
algorithm. The MAC key identifier uniquely identifies the MAC key. The MAC key
identifier is sent with each request to tell the server which MAC key was used
to sign the request. The MAC key is the shared secret key. It should never be
shared with anyone or transmitted in any request. Keep this key secure as you
would any private key. Finally, the MAC algorithm describes the algorithm used
to create the signature. It is always set to `HMAC-SHA1`.

    {
      "macKeyIdentifier": "97ee420faaa343d4a04b7378b319b48b",
      "macKey": "NyWslT0Oe7ZNJynyUIwg-SRj3A44DD_lrH6_-dwZ6E4",
      "macAlgorithm": "HMAC-SHA1"
    }

NOTE: The MAC key is [Base64](http://tools.ietf.org/html/rfc4648) encoded using
a URL-safe alphabet, which substitutes `-` instead of `+` and `_` instead of `/`
in the standard Base64 alphabet. TheMAC key also may not contain padding
(represented with the `=` character). Prior to using the MAC key, decode it from
Base64.

### The Authorization Header

Except when creating an account, all requests to the platform must include an
authorization header. The authorization header includes the authorization type
“MAC” and the following five fields:

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>The MAC key identifier that uniquely identifies the MAC key used to generated the MAC signature.</td>
    </tr>
    <tr>
      <td>ts</td>
      <td>An integer timestamp equal to the number of seconds since January 1, 1970 00:00:00 UTC. This is also known as POSIX time or Unix time. Requests are only valid within 30 seconds of the timestamp.</td>
    </tr>
    <tr>
      <td>nonce</td>
      <td>An arbitrary string that must be different for each request in a 30 second window with the same MAC key identifier. Used to prevent replay attacks.</td>
    </tr>
    <tr>
      <td>ext</td>
      <td>The extension string is used to verify the contents of the request. It is an empty string for GET and DELETE request. For PUT and POST requests, concatenate the value of the Content-Type header (e.g. “application/json”) with the request body and hash it with SHA1.</td>
    </tr>
    <tr>
      <td>mac</td>
      <td>The MAC signature for this request. The MAC signature is a Base64 encoded string that is generated by the HMAC-SHA1 algorithm, the MAC key, and the normalized request string. This process is described in the next section.</td>
    </tr>
  </tbody>
</table>

Note that the MAC key is not included in the authorization header. This key is a
secret and should not be included in any request. Here is an example of an
authorization header:

    Authorization: MAC id="97ee420faaa343d4a04b7378b319b48b",
                       ts="1379541939",
                       nonce="OK3HY80lkQ0=",
                       ext="",
                       mac="EmYShgBbKjp7XB3gbZq9e0zZy+8="

When this authorization header is provided in requests to protected resources,
the LCP authenticates the request using the following steps:

1. Checks that the timestamp is within 30 seconds of the current time.
1. Checks that the nonce has not been used in a previous request with the same
   MAC key identifier in the 30 second window.
1. Checks the MAC signature by using the same process as the client. Using the
   MAC key that corresponds to the MAC key identifier and the request details,
   the LCP generates a MAC signature for this request and compares it to the one
   that was passed in the authorization header. 
1. Generates the extension string and verifies that it matches the string provided in the authorization header.

If all of these conditions are met the request is authenticated.

### Generating the MAC Signature

The MAC signature is generated using the MAC key and a normalized request string
that contains the details of the request. The normalized request string is
assembled as follows (`\n` indicates a new line character at the end of every
line):

<table>
  <thead>
    <tr>
      <th>Format</th>
      <th>GET Example</th>
      <th>POST Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Timestamp\n<br>
        Nonce\n<br>
        HTTP Method (all caps)\n<br>
        Path\n<br>
        Hostname\n<br>
        Port\n<br>
        Extension\n<br>
      </td>
      <td>
        1377721336\n<br>
        4FvtoumTybo=\n<br>
        GET\n<br>
        /v1/apps/\n<br>
        lcp.points.com\n<br>
        443\n<br>
        \n<br>
      </td>
      <td>
        1377724146\n<br>
        u8BNUfE5Gu8=\n<br>
        POST\n<br>
        /v1/apps/\n<br>
        lcp.points.com\n<br>
        443\n<br>
        a9d46382c97bd4b0475b5b152dddaf2d61c0a30d\n<br>
      </td>
    </tr>
  </tbody>
</table>

- **Timestamp:** The number of seconds since January 1, 1970 00:00:00 UTC. This
  is also known as POSIX time or Unix time. Requests are only valid within 30
  seconds of the timestamp.
- **Nonce:** An arbitrary string that must be different for each request in a 30
  second window with the same MAC ID.
- **HTTP Method:** One of GET, PUT, POST, or DELETE (must be uppercase).
- **Path:** The path to the resource on the server. Starts with the slash after
  the hostname/port in the URI.
- **Hostname:** The hostname of the server in the HTTP request. Do not include
  the protocol (`https://`), port or path.
- **Port:** The port for the HTTP request. Use 443 for HTTPS.
- **Extension:** Blank for GET and DELETE request. For PUT and POST requests,
  concatenate the value of the Content-Type header (e.g. `application/json`)
  with the request body and hash it with SHA1.

This normalized request string and the MAC key are fed into the HMAC-SHA1
algorithm to obtained the binary MAC signature. The binary signature is
[Base64](http://tools.ietf.org/html/rfc4648) encoded for inclusion in the
[authorization header](#the-authorization-header) for the request.

Here is an example of using the HMAC-SHA1 algorithm to generate the signature in Python:

    def generate_signature(mac_key, normalized_request_string):
        """Generate a request's MAC given a normalized request string (aka
        a summary of the key elements of the request and the mac key (shared
        secret)."""

        import hmac
        import hashlib
        import base64

        # Add padding to the MAC key if needed
        mac_key+= '=' * (4 - len(mac_key) % 4)

        # Base64 decode the MAC key using URL-safe alphabet
        mac_key= base64.urlsafe_b64decode(mac_key)

        # Create the hash
        hashed = hmac.new(mac_key, normalized_request_string, hashlib.sha1)

        # Base64 encode the result
        return base64.b64encode(hashed.digest())

## HTTP Status Codes

HTTP status codes are used to indicate success or failure. Status codes in the
`200s` indicate the request was successful. Status codes in the `400s` indicate
failure. Details of the success or failure are contained in the body of the
response.

<table>
  <thead>
    <tr>
      <th>HTTP Status Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>200 OK</td>
      <td>The request completed successfully. The resource is contained in the body of the response.</td>
    </tr>
    <tr>
      <td>201 Created</td>
      <td>Request to create a resource completed successful. The URI of the created resource is included in the Location header in the response.</td>
    </tr>
    <tr>
      <td>204 No Content</td>
      <td>The request completed successfully with no content in the body of the message. Usually a response from a request to delete a resource.</td>
    </tr>
    <tr>
      <td>400 Bad Request</td>
      <td>The data provided in the request has incorrect. Check the JSON error response for details.</td>
    </tr>
    <tr>
      <td>401 Unauthorized</td>
      <td>Either the authorization header was not provided or was invalid.</td>
    </tr>
    <tr>
      <td>404 Not Found</td>
      <td>The requested resource was not found or the current user does not have permission to access it.</td>
    </tr>
    <tr>
      <td>415 Unsupported Media Type</td>
      <td>Returned if the request provided an unsupported content type. Only application/json is supported.</td>
    </tr>
    <tr>
      <td>422 Unprocessable Entity</td>
      <td>The data provided in the request for valid, but the request could not be completed for another reason. Check the JSON error response for details.</td>
    </tr>
  </tbody>
</table>

## Errors

When the HTTP status code indicates a failure, the response includes a JSON
document that lists the errors in a predictable format. The JSON contains a hash
called “errors” that is an array of the errors encountered in the request. Here
is an example of an error response:

    {
      "errors": [
        {
          "code": "MISSING_FIELD",
          "description": "'name' is required.",
          "field": "name"
        },
        {
          "code": "MISSING_FIELD",
          "description": "'description' is required.",
          "field": "description"
        }
      ]
    }

Each error array element contains the following fields:

<table>
  <thead>
    <tr>
      <th>Error Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>code</td>
      <td>A standard code describing the error. You can use this code to programmatically handle the error and take appropriate action. See below for a list of standard error codes.</td>
    </tr>
    <tr>
      <td>description</td>
      <td>A description of the error that further explains the error that can be displayed to the end-user</td>
    </tr>
    <tr>
      <td>field</td>
      <td>The name of the field in the request that caused the error (if applicable).</td>
    </tr>
  </tbody>
</table>

Here is a list of possible error codes that the LCP may return:

<table>
  <thead>
    <tr>
      <th>Error Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BAD_REQUEST</td>
      <td>The browser (or proxy) sent a request that this server could not understand.</td>
    </tr>
    <tr>
      <td>FORBIDDEN_LAST_CREDENTIALS</td>
      <td>Unable to delete last set of credentials.</td>
    </tr>
    <tr>
      <td>INCORRECT_TYPE</td>
      <td>The value provided is of incorrect type. For example, a string was provided when an integer is required.</td>
    </tr>
    <tr>
      <td>INVALID_VALUE</td>
      <td>The value provided is not allowed. For example, the requested debit amount is greater than the balance on the member validation.</td>
    </tr>
    <tr>
      <td>MISSING_FIELD</td>
      <td>A required field was not provided in the body of the request. The “field” property of the returned error object contains which required field was not provided.</td>
    </tr>
    <tr>
      <td>MISSING_REPRESENTATION</td>
      <td>The request expected a JSON object to be provided in the body of the request and none was provided.</td>
    </tr>
    <tr>
      <td>MV_ALREADY_USED</td>
      <td>The member validation has already been used with another transaction. Member validations can only be used for one transaction.</td>
    </tr>
    <tr>
      <td>NOT_FOUND</td>
      <td>The requested URL was not found on the server.  If you entered the URL manually please check your spelling and try again.</td>
    </tr>
    <tr>
      <td>NO_MATCH</td>
      <td>A field provided in the request did not match the regular expression used to validate the field. The field name and regular expression is provided in the description of the error message.</td>
    </tr>
    <tr>
      <td>UNAUTHORIZED</td>
      <td>The server could not verify that you are authorized to access the URL requested.  You either supplied the wrong credentials (e.g. a bad password), or your browser doesn't understand how to supply the credentials required.</td>
    </tr>
    <tr>
      <td>UNKNOWN_MEMBER</td>
      <td>The loyalty program couldn't find a member with the given credentials.</td>
    </tr>
    <tr>
      <td>UNSUPPORTED_MEDIA_TYPE</td>
      <td>The server does not support the media type transmitted in the request. Only Content-Type: application/json is supported.</td>
    </tr>
    <tr>
      <td>VALUE_NOT_UNIQUE</td>
      <td>One of the fields you provided must be unique but the data provided already exists in the system.</td>
    </tr>
    <tr>
      <td>VALUE_OUT_OF_RANGE</td>
      <td>The number provided is outside of the range of valid input for the field. For example, a negative integer was provided when the number must be positive.</td>
    </tr>
  </tbody>
</table>

## Links

JSON response documents that are returned by the LCP contain a “links” property.
This property contains URLs that help you consume further resources within the
LCP REST API. You should not create your own links to access and platform and
instead should follow the links provided. This allows your code to be less
dependent on the implementation details of the API.

The types of links provided are:

<table>
  <thead>
    <tr>
      <th>Link Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>self</td>
      <td>A link to the current resource.</td>
    </tr>
    <tr>
      <td>friendly</td>
      <td>A more user-friendly link to the current resource.</td>
    </tr>
  </tbody>
</table>

Each link has an href property that contains the link. For example:

    {
      "links": {
        "self": {
          "href": "https://lcp.points.com/v1/accounts/<id>"
        },
        "friendly": {
          "href": "https://lcp.points.com/v1/accounts/<email>"
        }
      }
    }




