LPAPI Heroku Ready Implementation
=========

This Java Heroku application showcases a barebones implementation of the APIs invoked by the LCP when calling out to your loyalty program.

## Setup

1. Create a [free Heroku account](https://signup.heroku.com/dc). 
2. Optional: Install [Maven](http://maven.apache.org/download.cgi) for local deployment.
3. Install [Heroku toolbelt](https://toolbelt.heroku.com/). 
4. In command line, clone this repository: git clone https://github.com/Points/Loyalty-Commerce-Platform.git
5. Navigate to the *Loyalty-Commerce-Platform* folder
6. Create a Heroku application: *heroku create "application name"*
7. Push the code to your Heroku application: *git subtree push --prefix samples/java/lpapi-heroku-implementation heroku master*
8. Start the Heroku application: *heroku ps:scale web=1*

## Usage

- Download [Postman](https://www.getpostman.com/) 
- Import this Postman collection [![Run in Postman](https://s3.amazonaws.com/postman-static/run-button.png)](https://www.getpostman.com/run-collection/b99dd7a5585068bc358f)
- Replace "application" in the URL with the name of the application you created in step 6 above
- Exercise the Member Validation (memberIds 1000 or 1001), Debit and Credit operations
- Once done, exercise the Get Transactions operation to download a CSV file with all the transactions performed
- Note: Basic Auth is used. The username and password are both "admin".
  


