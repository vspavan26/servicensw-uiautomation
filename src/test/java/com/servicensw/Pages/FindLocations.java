package com.servicensw.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class FindLocations {
	
	private WebDriver dr = null;

	public FindLocations(WebDriver driver)	{
		this.dr = driver;
	}
	
	public void enterSearchCriteria(String searchCriteria)	{
		dr.findElement(By.id("locatorTextSearch")).click();
		dr.findElement(By.id("locatorTextSearch")).clear();
		dr.findElement(By.id("locatorTextSearch")).sendKeys(searchCriteria);
	}
	
	public void clickSubmitSearch()	{
		dr.findElement(By.xpath("(//button[@type='submit'])[2]")).click();
	}
	
	public void clickFindLocations() {
		dr.findElement(By.xpath("//a[text()='Find locations']")).click();
	}
	
	public boolean isCorrectSearchResultPresent(String searchText)	{
		return dr.findElement(By.xpath("//a[contains(text(),'"+ searchText +"')]")).isDisplayed();
	}


}
