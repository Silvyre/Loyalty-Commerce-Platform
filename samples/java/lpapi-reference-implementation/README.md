LPAPI Reference Implementation
=========

This Java Heroku application showcases a barebones implementation of the APIs invoked by the LCP when calling out to your loyalty program.

## Setup

1. Create a [free Heroku account] (https://signup.heroku.com/dc). 
2. Install [Maven] (http://maven.apache.org/download.cgi) locally.
3. Install [Heroku toolbelt] (https://toolbelt.heroku.com/). 
4. Clone this repository: git clone https://github.com/Points/Loyalty-Commerce-Platform.git
5. Navigate to the Loyalty-Commerce-Platform folder
6. Create a Heroku application: heroku create "application name"
7. Push the code to your Heroku application: git subtree push --prefix samples/java/lpapi-reference-implementation heroku master
8. Start the Heroku application: heroku ps:scale web=1

## Usage

- Dowbload [Postman] (https://www.getpostman.com/) 
- Import this [Postman collection] (https://www.getpostman.com/collections/5913e7f4d1f7bb920d1e)
- Exercise the Member Validation (memberIds 1000 or 1001), Debit and Credit operations
- Once done, exercise the Get Transactions operation to download a CSV file with all the transactions performed
  


