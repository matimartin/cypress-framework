Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the Salcobrand Online login page
    Scenario: Success Login
        When A user enters the username "juanpa.pisano@gmail.com", the password "Test1234!", and clicks on the login button
        Then the url will contains the login subdirectory
    Scenario: Blocked Login
        When A user enters the username "Usuario incorrecto", the password "Contraseña", and clicks on the login button
        Then The error message "Revisa tu correo" is displayed
    Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username | password     |
            | Usuario1 | contraseña1 |
        Then The error message "Revisa tu correo" is displayed
    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username      | password     |
            | Usuario2 | Contraseña2 |
        Then The error message2 "Revisa tu contraseña" is displayed
