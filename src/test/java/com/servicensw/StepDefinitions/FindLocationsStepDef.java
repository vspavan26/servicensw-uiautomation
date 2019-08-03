package com.servicensw.StepDefinitions;

import org.testng.Assert;

import com.servicensw.Pages.FindLocations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FindLocationsStepDef {
	
	FindLocations findlocations = new FindLocations(ScenarioHooks.wd);
	
	@Given("^user click on find locations$")
    public void user_is_on_homepage()  {
		findlocations.clickFindLocations();
    }
	
    @When("^user enters search (.*) on find locations page$")
    public void user_enters_search_criteria(String searchCriteria)  { 
    	findlocations.enterSearchCriteria(searchCriteria);
    }
    
    @When("^clicks on search button on find location page$")
    public void click_Search(){ 
    	findlocations.clickSubmitSearch();
    }
    
    @Then("^verify correct search results are found for (.*) on find locations page$")
    public void isCorrectSearchResultDisplayed(String searchText){ 
    	Assert.assertTrue(findlocations.isCorrectSearchResultPresent(searchText), "Verify whether correct search result is present");
    }

}
