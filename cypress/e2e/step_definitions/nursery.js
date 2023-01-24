import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const loginPage = require("../../pages/LoginPage");

  Given('I am an authenticated user', () => {
    cy.visit('www.gdmseeds.com');
});

When('I send a GET request to the {string} endpoint', (string) => {
    cy.request({
        method: 'GET',
        url: "https://www.gdmseeds.com/nursery/serie-query/v1/series/cf8dc407-1d1c-47a4-afb3-440e98cef6e2",
    }).then((response) => {
      cy.log(response);
    });
});

Then('the response should have a status code of {int}', (statusCode) => {
    cy.get(response)
    .its('status')
    .should('eq', statusCode);
});

/** 
And('the response should include the following information:', (dataTable) => {
    const expected = dataTable.rowsHash();
    cy.get('@response')
    .its('body')
    .should((responseBody) => {
        expect(responseBody).to.have.property('correlationId', expected.correlationId);
        expect(responseBody).to.have.property('company', expected.company);
    });
});
*/

