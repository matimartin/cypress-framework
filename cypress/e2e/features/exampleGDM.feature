Feature: Login page

    Feature elements will open the GDM Seeds web page to run an example.

    Background:
        Given A web browser is at GDM Seeds web page
    Scenario: Success open GDM Seeds web page
        Then The GDM seeds logo will be displayed
    Scenario: Success go to technology tab
        When A user click on technology button 
        Then Text about technology is displayed

