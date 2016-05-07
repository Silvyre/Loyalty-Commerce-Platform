Java LP API Reference Implementation
=======

The Java LP API Reference Implementation is a sample implementation of an Java web application that implements the [LP API] (http://points.github.io/Loyalty-Commerce-Platform/?doc=lp-reference).

## Usage

- Make sure you have [Eclipse] (http://www.eclipse.org/downloads/) and [M2E] (http://www.eclipse.org/m2e/m2e-downloads.html) installed
- Clone this repository: git clone https://github.com/Points/Loyalty-Commerce-Platform.git
- Import Loyalty-Commerce-Platform\samples\java\lpapi-reference-implementation into Eclipse
- Run the project (right click on com.points.lcp.samples.lpapi.Main and choose Run As->Java Application)
- Try it in Postman [![Run in Postman](https://run.pstmn.io/button.png)](https://www.getpostman.com/run-collection/3db7f1f986c46f2d9d96)

## Update the API to return additional/less member details

- The SDK uses [RAML] (http://raml.org) to define the LP API
- Open Loyalty-Commerce-Platform\samples\java\lpapi-reference-implementation\src\main\resources\raml\lp-api.raml and add/remove fields from the mvResponse schema
- Right click on pom.xml in the root of the Eclipse project and execute Run As->Maven generate-sources 



