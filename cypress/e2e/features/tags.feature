Feature: Login page with Tags

    Feature Login page will work depending on the user credentials with Tags

    Background:
        Given A web browser is at the Salcobrand Online login page - tag demo
    @mobile
    Scenario: Success Login
        When A user enters the username "juanpa.pisano@gmail.com", the password "Test1234!", and clicks on the login button - tag demo
        Then the url will contains the login subdirectory - tag demo
    @desktop
    Scenario: Blocked Login
        When A user enters the username "Uruario1", the password "Contraseña", and clicks on the login button - tag demo
        Then The error message "Revisa tu correo" is displayed - tag demo
    @API
    Scenario: User data
        When A user access to user area
        Then The information about his account is displayed