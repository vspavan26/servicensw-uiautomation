Feature: Verify service nsw website

  @Smoke
  Scenario Outline: Verify service nsw website
    Given user lands on servicensw page
    When user enters search <homesearchcriteria> on home page
    When clicks on search button on home page
    Then verify correct search results are found for <homesearchcriteria> on home page
    When user click on find locations
    When user enters search <findlocationssearchcriteria> on find locations page
    When clicks on search button on find location page
    Then verify correct search results are found for <findlocationresult> on find locations page

    Examples: 
      | homesearchcriteria       | Suburb      | Service Centre              | findlocationssearchcriteria | findlocationresult          |
      | Apply for a number plate | Sydney 2000 | Marrickville Service Centre | Sydney 2000                 | Marrickville Service Centre |
