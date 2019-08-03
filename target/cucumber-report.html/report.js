$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ServiceNSW.feature");
formatter.feature({
  "line": 1,
  "name": "Verify service nsw website",
  "description": "",
  "id": "verify-service-nsw-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify service nsw website",
  "description": "",
  "id": "verify-service-nsw-website;verify-service-nsw-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user lands on servicensw page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters search \u003chomesearchcriteria\u003e on home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on search button on home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify correct search results are found for \u003chomesearchcriteria\u003e on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on find locations",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters search \u003cfindlocationssearchcriteria\u003e on find locations page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "clicks on search button on find location page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "verify correct search results are found for \u003cfindlocationresult\u003e on find locations page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "verify-service-nsw-website;verify-service-nsw-website;",
  "rows": [
    {
      "cells": [
        "homesearchcriteria",
        "Suburb",
        "Service Centre",
        "findlocationssearchcriteria",
        "findlocationresult"
      ],
      "line": 15,
      "id": "verify-service-nsw-website;verify-service-nsw-website;;1"
    },
    {
      "cells": [
        "Apply for a number plate",
        "Sydney 2000",
        "Marrickville Service Centre",
        "Sydney 2000",
        "Marrickville Service Centre"
      ],
      "line": 16,
      "id": "verify-service-nsw-website;verify-service-nsw-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6543210000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify service nsw website",
  "description": "",
  "id": "verify-service-nsw-website;verify-service-nsw-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user lands on servicensw page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters search Apply for a number plate on home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on search button on home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify correct search results are found for Apply for a number plate on home page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on find locations",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters search Sydney 2000 on find locations page",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "clicks on search button on find location page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "verify correct search results are found for Marrickville Service Centre on find locations page",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 4425572000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apply for a number plate",
      "offset": 19
    }
  ],
  "location": "HomeStepDef.user_enters_search_criteria(String)"
});
formatter.result({
  "duration": 435158000,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.click_Search()"
});
formatter.result({
  "duration": 1095942400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apply for a number plate",
      "offset": 44
    }
  ],
  "location": "HomeStepDef.isCorrectSearchResultDisplayed(String)"
});
formatter.result({
  "duration": 57894200,
  "status": "passed"
});
formatter.match({
  "location": "FindLocationsStepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 1753681000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney 2000",
      "offset": 19
    }
  ],
  "location": "FindLocationsStepDef.user_enters_search_criteria(String)"
});
formatter.result({
  "duration": 662427000,
  "status": "passed"
});
formatter.match({
  "location": "FindLocationsStepDef.click_Search()"
});
formatter.result({
  "duration": 233183400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marrickville Service Centre",
      "offset": 44
    }
  ],
  "location": "FindLocationsStepDef.isCorrectSearchResultDisplayed(String)"
});
formatter.result({
  "duration": 1068832200,
  "status": "passed"
});
formatter.after({
  "duration": 789575800,
  "status": "passed"
});
});