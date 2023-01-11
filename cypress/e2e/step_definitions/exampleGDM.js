import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

const loginPage = require("../../pages/LoginPage");

Given("A web browser is at GDM Seeds web page", () => {
  cy.visit("https://www.gdmseeds.com/");
});

When("A user click on technology button", () => {
  cy.get("menu-item-520").click
});

Then("The GDM seeds logo will be displayed", () => {
  cy.url().should("contains", "gdmseeds")
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password)
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)
  
  });
});

Then("the url will contains the login subdirectory", () => {
  cy.url().should("contains", "/?");
});

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().eq(0).should("have.text", errorMessage);
});

Then("The error message2 {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().eq(1).should("have.text", errorMessage);
});
