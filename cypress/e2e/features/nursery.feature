Feature: Retrieve user information
  As a user, I want to be able to retrieve my information so that I can view my profile details
  
  Scenario: Retrieve user information
    Given I am an authenticated user
    When I send a GET request to the "https://www.gdmseeds.com/nursery/serie-query/v1/series/cf8dc407-1d1c-47a4-afb3-440e98cef6e2" endpoint
    Then the response should have a status code of 200
    And the response should include the following information:
        | correlationId                       | company |
        | 696266b2-a510-420a-9794-4a583c0466fb| GDM_ARG |
