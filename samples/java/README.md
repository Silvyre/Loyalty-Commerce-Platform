SSO Reference Implementation
=========

This project demonstrate one website redirecting a logged in member to another website through the LCP.
For more information on this process please go to the [LCP Reference Manual] (http://points.github.io/Loyalty-Commerce-Platform/?doc=reference-manual#single-sign-on-sso-)

## Setup

1. Make sure you have [Eclipse] (http://www.eclipse.org/downloads/) and [M2E] (http://www.eclipse.org/m2e/m2e-downloads.html) installed 
2. Download this repo using git
3. Import this project into Eclipse
4. Inside src/main/resources update config.properties as follows:
a) macId is the Mac ID corresponding to the sandbox or live key of the application you have created in the [LCP admin console] (https://admin.lcp.points.com/)  
b) macKey is the Mac Key corresponding to the sandbox or live key of the application you have created in the [LCP admin console] (https://admin.lcp.points.com/)
c) applicationId is the ID of the application which is supposed to be allowed to get the details of the member you are redirecting to their site
d) lpId is the ID of the LP configured for your loyalty program (Note: if you used your sandbox Mac ID and Mac Key above, then the lpId should start with https://sandbox...)
e) redirectBaseURL is the URL where the website where your member will be sent to (corresponding to the applicationId setup above)
f) (Optional) encryptyonKey if you want the MV URL to be AES encrypted (this assumes the third party website is configured with the same key and therefore can decrypt the value of the mv query parameter which will be passed to it)

## Usage

- Update populateMemberValidation and populateMemberValidationResponse inside the SSORedirectServlet with the fields and the values you want to send over to the third party website via the LCP
- Run ServerMain
- In your browser proceed to [http://localhost:7071/redirect] (http://localhost:7071/redirect) which will redirect the member to redirectBaseURL/redirect?mv=MVURL 


