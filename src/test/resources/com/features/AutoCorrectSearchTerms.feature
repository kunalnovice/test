Feature: Automatically correct mistyped search terms

  @autocorrect
  Scenario: Enter search term and view related images
    Given I am on the website 'http://www.google.com'
    When I submit the search term 'autoqa.org'
    And accept the first search result
    Then I should be on the page 'http://autoqa.org/'
