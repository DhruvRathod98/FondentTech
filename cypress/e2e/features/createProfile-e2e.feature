Feature: Login and Profile Management

  Scenario: User logs in and manages profiles
    Given I am on the Foundant login page
    When I log in with valid credentials
    And I open the BETA site "QA-TestSite-003"
    And I navigate to the "PROFILES" section
    And I create a new profile with the necessary details
    Then I should see the new profile created successfully
    When I open the newly created profile
    And I add a note to the profile
    And I add a task to the profile
    Then I should see the note and task added successfully
    And I log out
