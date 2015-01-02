$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AutoCorrectSearchTerms.feature");
formatter.feature({
  "line": 1,
  "name": "Automatically correct mistyped search terms",
  "description": "",
  "id": "automatically-correct-mistyped-search-terms",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Enter search term and view related images",
  "description": "",
  "id": "automatically-correct-mistyped-search-terms;enter-search-term-and-view-related-images",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@autocorrect"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website \u0027http://www.google.com\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I submit the search term \u0027autoqa.org\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "accept the first search result",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be on the page \u0027http://autoqa.org/\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.com",
      "offset": 21
    }
  ],
  "location": "SearchStepDefs.I_am_on_the_website(String)"
});
formatter.result({
  "duration": 8705394125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "autoqa.org",
      "offset": 26
    }
  ],
  "location": "SearchStepDefs.I_submit_the_search_term(String)"
});
formatter.result({
  "duration": 6241288432,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefs.accept_the_first_search_result()"
});
formatter.result({
  "duration": 2975994434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://autoqa.org/",
      "offset": 25
    }
  ],
  "location": "SearchStepDefs.I_should_be_on_the_page(String)"
});
formatter.result({
  "duration": 52711887,
  "status": "passed"
});
});$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ViewSearchResults.feature");
formatter.feature({
  "line": 1,
  "name": "Enter a search term into Google and view results",
  "description": "",
  "id": "enter-a-search-term-into-google-and-view-results",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Submit search term",
  "description": "",
  "id": "enter-a-search-term-into-google-and-view-results;submit-search-term",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website \u0027http://www.google.com\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I submit the search term \u0027autoqa.org\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "accept the first search result",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be on the page \u0027http://autoqa.org/\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.com",
      "offset": 21
    }
  ],
  "location": "SearchStepDefs.I_am_on_the_website(String)"
});
formatter.result({
  "duration": 4967993340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "autoqa.org",
      "offset": 26
    }
  ],
  "location": "SearchStepDefs.I_submit_the_search_term(String)"
});
formatter.result({
  "duration": 5480222684,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefs.accept_the_first_search_result()"
});
formatter.result({
  "duration": 4023620108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://autoqa.org/",
      "offset": 25
    }
  ],
  "location": "SearchStepDefs.I_should_be_on_the_page(String)"
});
formatter.result({
  "duration": 50081729,
  "status": "passed"
});
});