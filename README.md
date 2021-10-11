# Cajoo Developer Test

We would like to thank you for taking our developer test. We understand that candidates will often have many of these tests to complete, therefore we think it's important to cut straight to the important stuff.

## About this repository

We've gone ahead and created a boilerplate that represents part of the technical stack we work with. It contains the following:

- A React app in Typescript (created with `create-react-app`)
- An Apollo client configured with credentials to connect to a staging environment with mock data
- Some GraphQL queries to fetch data and examples of how it can be used

## Challenge

You have been provided access to a staging environment with mock data about a very special customer.

_Display summary information for this customer as if you were a member of the customer service team_

You should at least display the following:

- The total # of orders made by this customer
- The total amount spent by this customer
- The AOV (average order value) for this customer
- The list of the last orders with:
  - order number
  - delivery address
  - total_basket
  - amount_paid
  - total_refunds
  - voucher used

**⭐️ Bonus**: Dig out the data model and display additional information about the user that you may find interesting.

### ❓ Feel free to ask the interviewer about the meaning of the different tables

## Deliverables

- We will do a voice over your code at the end of the interview
- Put your code on a private Github repository and invite us over so we can have another look afterwards

## Usage

Start the React app

a. Install the dependencies

```bash
yarn
```

b. Run the application (will start on port `3000`)

```bash
yarn start
```

c. Generate the types for your queries or mutations

```bash
yarn graphql:codegen
```
