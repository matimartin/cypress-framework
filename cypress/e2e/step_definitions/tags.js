import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");

Given("A web browser is at the Salcobrand Online login page - tag demo", () => {
  cy.visit("/login");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button - tag demo", (username,password) => {
  loginPage.submitLogin(username,password)
});

When("A user provides incorrect credentials, and clicks on the login button - tag demo", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)

  });
});
Then("the url will contains the login subdirectory - tag demo", () => {
  cy.url().should("contains", "/?");
});
Then("The error message {string} is displayed - tag demo", (errorMessage) => {
  loginPage.elements.errorMessage().eq(0).should("have.text", errorMessage);
});

When("A user access to user area", () => {
  cy.request('https://reqres.in/api/users/2')
  .its('status')
  .should('eq', 200)
});

const modeloApi =
  {
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

Then('The information about his account is displayed', () => {
  cy.request('https://reqres.in/api/users/2')
  .its('body')
  .should('deep.eq', modeloApi)
});
