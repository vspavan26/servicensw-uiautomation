package com.servicensw.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.testng.Assert;

import com.servicensw.Pages.Home;

public class HomeStepDef
{
	Home home = new Home(ScenarioHooks.wd);
	
	
	@Given("^user lands on servicensw page$")
    public void user_is_on_homepage()  {
        home.openURL();
    }
	
    @When("^user enters search (.*) on home page$")
    public void user_enters_search_criteria(String searchCriteria)  { 
    	home.enterSearchCriteria(searchCriteria);
    }
    
    @When("^clicks on search button on home page$")
    public void click_Search(){ 
    	home.clickSubmitSearch();
    }
    
    @Then("^verify correct search results are found for (.*) on home page$")
    public void isCorrectSearchResultDisplayed(String searchText){ 
    	Assert.assertTrue(home.isCorrectSearchResultPresent(searchText), "Verify whether correct search result is present");
    }
    
}