Feature: Enter a search term into Google and view results

  @search
  Scenario: Submit search term
    Given I am on the website 'http://www.google.com'
    When I submit the search term 'autoqa.org'
    And accept the first search result
    Then I should be on the page 'http://autoqa.org/'
