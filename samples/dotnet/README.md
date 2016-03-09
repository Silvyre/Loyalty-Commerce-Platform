.Net LP API Reference Implementation
=======

The .Net LP API Reference Implementation is a sample implementation of an Asp.Net web application that implements the [LP API] (http://points.github.io/Loyalty-Commerce-Platform/?doc=lp-reference).

## Usage

- Clone this repository: git clone https://github.com/Points/Loyalty-Commerce-Platform.git
- Launch Loyalty-Commerce-Platform\samples\dotnet\LP API Implementation\LP API Implementation.sln
- Run the project
- Try it in Postman [![Run in Postman](https://run.pstmn.io/button.png)](https://www.getpostman.com/run-collection/3db7f1f986c46f2d9d96)

## Update the API to return additional/less member details

- The SDK uses [RAML] (http://raml.org) to define the LP API
- Install [RAML Tools for .Net] (https://visualstudiogallery.msdn.microsoft.com/cadcb820-762c-4514-9817-884b7558aaa9)
- Open Loyalty-Commerce-Platform\samples\dotnet\LP API Implementation\LP API Implementation\Contracts\lp-api.raml and add/remove fields from the mvResponse schema
- Right click on Loyalty-Commerce-Platform\samples\dotnet\LP API Implementation\LP API Implementation\Contracts\lp-api.raml and choose "Update RAML Contract from Source"



